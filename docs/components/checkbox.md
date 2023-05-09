---
sidebarDepth: 4
---
<script setup>
import { ref } from 'vue'
import BasicCheckbox from './checkbox/checkbox.vue'
import BasicCheckbox2 from './checkbox/checkbox-without-input.vue'

const checkboxValue = ref(true)
</script>
# Checkbox

## Checkbox Examples

We're going to look at two examples of a checkbox component. The first example wraps a native `<input>` element to create the checkbox. The second example uses CSS to give the impression of a checkbox without using an `<input>`.

In both cases the example usage is much the same:

```vue
<template>
  <basic-checkbox v-model="checkboxValue" />
  <pre>Bound value: {{ checkboxValue }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import BasicCheckbox from './checkbox.vue'

const checkboxValue = ref(true)
</script>
```

The important part is the two-way binding created using `v-model`.

### Checkbox with `<input>`

<live-example>
  <basic-checkbox v-model="checkboxValue" />
  <pre>Bound value: {{ checkboxValue }}</pre>
</live-example>

[SFC Playground](https://play.vuejs.org/#eNp9ksFugzAMhl/FygUqteWOaKV12n2nXcYOlLhbNEiykLBNiHefk7SUdlVv2LH9f/7NwB60XvcOWc6KrjZCW+jQOr0tpWi1MhYGMHiAEQ5GtZBQaTI97apO1I8fWH/u1c+xYJ1dZP1saihlrWRnoT6mX6rGIWz86NQah4tSFlnUJ2UKLLa6qSxSBFDs/cjVqRn6Vas4NpuSXcwrGWSxXhvc7pSTHHr/kMMwXEmPY5H5Kq87abEl+wd/z5hatdpZ5FfunJbVRumOluR4EBKffZQOni/QBw4i8wkgI76cMMhz8HYsY9L+aqrYKdVgRVMBxlKOZNVJAFthp/lPFHTpa+I0p13ys0byNmsJLhDxZoKPSO9oIV2caawzMi6wPk8KCIGNrIBU4ndwCvnU6InSGwhLmBXPNrl3dC768EGfQhJqsGN2czr31Y+AvGSxN4vN89uOfw4jBwg=)

<<< @/components/checkbox/checkbox.vue

### Checkbox without `<input>`

<live-example>
  <basic-checkbox2 v-model="checkboxValue" />
  <pre>Bound value: {{ checkboxValue }}</pre>
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqFUUuP2jAQ/ivT9JAgAaGPrUoKqKXqvademh6CPQSLxHZth0Kj/PeO8yDQXe0qiuQZf/4eM3XwRev5qcIgCVaWGaEdWHSV3qRSlFoZBzUY3EMDe6NKCAkaXq+2mRXs6wHZcafOPWAe33U9Nz1IJVPSOmB9+0dWVAhrTx05U+Eklau40ydlKhyWusgcUgWw2nnK2fAYTrNScSzWaXDHlwYQd3htcLNVleRw8hcJ1PV/0k2zij3K6161gmnwyPwTg+miaKO0pQgc90Lid19FtVdvvbUqpOsbQDF/V8IgT8CHnXZNd9GE2CpVYEaRAZpUNjSIQQBL4a7836iw0c+w0pycJqNG+OvmiVN5Xvi5RhNYbzp1TxM98W4Kr9oI87FHTOThuUVwcWoP3RFYkVlLa6BZ0fCToeyH7fOO5BQvgM+sEOxIkM7puLG4Y75ZRqtu3YXyWKY0curM/fbbVDtlOJoE3ugzWFUIDq+Xy+Wn8WpmMi4q2yL69nlmxV8h82SAUKu9OqDID46gH3rsH8Hd4VrTTEh6iJTscK8M3tvoLSwW7NZCT7Og7y35pP8lJ7RGh5KshGFbc2FpGhfCFYod78w+9GxlZnIhE3jX185k0pLDMgGjHE0ymr1/4JhPbpN9HILRsv2IN0HzD5tuZjs=)

<<< @/components/checkbox/checkbox-without-input.vue

## Vue Patterns

To implement `v-model` on a component, we need to define a prop called `modelValue` and an event called `update:modelValue`. This pair is used automatically when the parent component uses the `v-model` directive. The current value will be passed in using the prop. When the checkbox component needs to change that value it will emit the event, along with the new value.

As the first example is using an `<input>` element, it can also use `v-model` in its template. It can't bind directly to the prop, as reassigning the prop would not update the parent component. Instead, it uses a `computed` with a `get`/`set` pair to proxy the prop's value through to the `v-model`. The `get` just passes on the prop, while the `set` emits the relevant event.

It could also be implemented without using `v-model` on the `<input>`. Instead, we could use something like this:

```html
<input
  type="checkbox"
  :checked="modelValue"
  @change="$emit('update:modelValue', !modelValue)"
>
```

This is conceptually very similar to how it is implemented in the second example. As the second example isn't using an `<input>`, it uses a CSS class to change the appearance of the checkbox to include a checkmark. The `click` event is serving a similar role to the `change` event in the code above.

One downside to using an `<input>` is that the displayed value changes automatically when it is clicked. This might sound like a good thing, but it isn't, as the change is happening outside of Vue's control. In general, we want rendering updates to be controlled by Vue and a component should faithfully render the value of its props. When the checkbox is clicked, the parent component should have the option to ignore the emitted event and leave the checkbox unchanged. While this isn't usually something that you'd need, it can be invaluable in identifying bugs in the parent component. If the parent isn't correctly updating the 'source of truth' for the value, having a checkbox that correctly renders that value makes it much easier to find the problem quickly. A checkbox that smothers the problem and updates itself on every click is actually really unhelpful during debugging.

The problem is similar to a common mistake made by beginners, where a component copies a prop into internal state and then uses a watcher to keep the two in sync. The idea is that the state can be used to bind an internal `v-model`, working around the restriction on mutating props. While there may be rare edge cases where this approach is justified, it should be seen as a last resort. Again, the heart of the problem is that the parent component may choose to ignore the emitted event, leading to the watcher not being triggered and the internal state being out of sync with the prop.

## Missing Functionality

These checkbox components only support binding to a `true`/`false` value via `v-model`. A real checkbox component would typically be a lot more flexible. Vue's built-in support for native HTML checkboxes allows the `true-value` and `false-value` to be configured, as well as supporting `Array` and `Set` values that can be used to bind multiple checkboxes to the same collection.

As the first example uses a native `<input>`, it gets a few accessibility features for free. It has basic keyboard support and should be understood by assistive technologies, as well as any other tools that rely on parsing semantic information from the HTML. The second example doesn't have any of that.

A real checkbox component would likely have support for a `<label>`. Other elements may also be required.  The surrounding `<div>` element is somewhat redundant in these examples, but there would need to be some kind of wrapper as the complexity grows.

The wrapper `<div>` will receive any extra attributes specified on the parent, inherited via `$attrs`. This may be desirable in some cases, such as `class`, but it also means that attributes such as `disabled` and `indeterminate` cannot be applied to the `<input>`. The target element for the `$attrs` can be changed using `inheritAttrs`, but either way some attributes will need to be extracted as props to ensure they are applied to the other element.

## Related Components

An individual checkbox represents a choice between two values. This is effectively the same as a [Toggle Switch](./toggle-switch.html) (left/right) or a Toggle Button (pressed/unpressed).

Multiple checkboxes can be used to model multiple selections, often represented using an `Array` or `Set` containing the selected values. This can also be represented using a list, like a `<select multiple>`. Some dropdowns also support multiple selections, often in combination with a tag/chip/pill component to show the selected values when the list is collapsed.

## Libraries

Various libraries include a checkbox component, including:

- Vuetify - [Checkbox](https://next.vuetifyjs.com/en/components/checkboxes/)
- Element Plus - [Checkbox](https://element-plus.org/en-US/component/checkbox.html)
- Quasar - [Checkbox](https://quasar.dev/vue-components/checkbox)
- Ant Design Vue - [Checkbox](https://www.antdv.com/components/checkbox)
- PrimeVue - [Checkbox](https://primefaces.org/primevue/checkbox)
- Naive UI - [Checkbox](https://www.naiveui.com/en-US/os-theme/components/checkbox)
- Oruga - [Checkbox](https://oruga.io/components/Checkbox.html)

Proxying `v-model` using a `computed` is so common that it features in libraries of composables:

- [VueUse - useVModel](https://vueuse.org/core/useVModel/)
- [vue-composable - useVModel](https://pikax.me/vue-composable/composable/misc/vmodel.html)
