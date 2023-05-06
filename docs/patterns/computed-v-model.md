<script setup>
import ProxyExample from './computed-v-model/proxy-example.vue'
</script>
# Computed with v-model

The principle of one-way data flow, with 'props down, events up', is just an extension of the idea that data should only be modified by its owner. This same idea can be extended to other scenarios, such as using Vuex, where the store is considered the owner of the data and so it should only be mutated by the store.

This causes problems when working with `v-model`, which attempts to modify the value directly. We can work around that using a `computed` value with a `get` and `set`.

There are more complete examples for [Checkbox](../components/checkbox.html) and [Radio](../components/radio.html) components, but to reduce it down to the essentials with an `<input>`:

```html
<input v-model="inputValue">
```

With:

```js
const inputValue = computed({
  get () {
    // return the current value
  },
  set (newValue) {
    // Tell the data's owner to update the value
  }
})
```

So for Vuex we might do something like this:

```js
const inputValue = computed({
  get: () => store.state.value,
  set: newValue => store.commit('updateValue', newValue)
})
```

A similar idea is common when working with data passed down from a parent component:

```js
const inputValue = computed({
  get: () => props.value,
  set: newValue => emit('update:value', newValue)
})
```

Using an event with a name of the form `update:propName` allows it to be used with `v-model` on the parent. The default prop name for this would be `modelValue`. As such, the technique described here is the standard way to 'pass on' a `v-model` from a component's parent to one of its children.

## Libraries

This pattern is so common that it can be found in composable libraries:

- [VueUse - useVModel](https://vueuse.org/core/useVModel/)
- [vue-composable - useVModel](https://pikax.me/vue-composable/composable/misc/vmodel.html)

## Alternatives

It is possible to achieve something similar by avoiding the use of `v-model` on the child and splitting it up into a prop and event instead. e.g.:

```html
<input :value="value" @input="$emit('update:value', $event.target.value)">
```

This may be tempting, but it does move more logic into the template, which is usually regarded as a bad thing. It's also worth noting that using `v-model` on native elements, such as `<input>` and `<select>`, actually adds some extra functionality that you won't get if you implement your own event listeners. e.g.:

- For text inputs, `v-model` adds special handling for IME composition.
- For radios, `v-model` supports the use of non-string values for the `value`. It also makes managing the `checked` option much simpler.
- For checkboxes, `v-model` adds support for handling `true-value`, `false-value` and the use of a `value` in conjunction with arrays and sets. As with radios it makes managing the `checked` option much simpler for non-boolean cases.
- For `<select>`, it gives similar benefits to either radios and checkboxes, depending on whether the `multiple` attribute is included.

These potential problems don't apply when using `v-model` on components, so splitting it up into a prop/event pair is less fraught, but consistently sticking to using a `computed` comes with very little risk and tends to be easier to maintain.

## Advanced usage - proxying objects

A less common scenario involves passing a large object of field values to a form component:

<<< @/patterns/computed-v-model/proxy-example.vue

Inside `user-edit-form` we want to provide inputs for each of these 6 properties. But having to write 6 separate `computed` values, one for each input, will quickly get annoying.

One trick to cut down on the boilerplate is to use a JS `Proxy` to do the sleight-of-hand for the reading and writing of properties instead of a `computed`. We'll still use a single `computed` to ensure everything stays reactive, but one is all we need:

<<< @/patterns/computed-v-model/user-edit-form.vue

Putting that all together gives:

<live-example>
  <proxy-example />
</live-example>

While it might look a bit fiddly if you aren't used to working with a `Proxy`, most of this code is very reusable and can be hidden away behind a utility function. We could create a similar utility function for performing the same bit of trickery with an object coming from a Vuex store.

The approach does violate another best practice. The usual recommendation is to avoid mutating the properties of an object returned from a `computed`, as they're considered transient. However, we're breaking that rule knowingly here as mutating those properties is the whole point of the approach.

In theory, it is possible to extend this idea to work with nested objects, though it quickly gets unwieldy trying to make all the relevant copies. It's probably better to rethink your approach in that scenario.

Another possible extension is to combine this approach with the earlier strategy of using `computed` with `get` and `set`. This gives us something quite powerful, with the option to either replace individual properties or replace the whole object:

```js
const model = computed({
  get () {
    return new Proxy(props.modelValue, {
      set (obj, key, value) {
        model.value = { ...obj, [key]: value }
        return true
      }
    })
  },
  set (newValue) {
    emit('update:modelValue', newValue)
  }
})
```

With this version we can assign `model.value = something` or `model.value.firstName = something` and in either case it will be magically converted into an event. That allows for both `v-model="model"` and `v-model="model.firstName"`, whichever one we need.
