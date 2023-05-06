# Coupled Components with `provide`/`inject`

There are various ways for components to communicate in Vue. The `provide`/`inject` mechanism is one of them, and it's generally not well understood.

It's common to hear `provide` and `inject` described as 'long-range props' or 'dependency injection'. While those can be useful ways to think of them, a major use case is for communication between tightly coupled components.

The term 'coupling' is often used as a criticism of a design, but there are many cases where tightly coupled components make sense. These are cases where a particular component needs to be a child (or deeper descendant) of another, specific component. A few examples:

1. An [accordion](../components/accordion.html) is often implemented using a parent container and expandable child panels.
2. A [tabs](../components/tabs.html) component may be broken down into several smaller components, e.g. for the tab buttons and the content containers. These all need to communicate to ensure the correct thing is showing at any given time.
3. A [radio group](../components/radio-group.html) or checkbox group, for communicating with the radio/checkbox children.
4. A map component will need to communicate with marker components.
5. A table component may need to communicate with headers, rows and cells.

While it is often possible for these components to communicate using props and events, that only works if one of the components is directly responsible for creating the other. It doesn't work if the two components are both created by a common parent.

Let's see a quick example:

```vue
<template>
  <my-map>
    <my-map-marker />
    <my-map-marker />
    <my-map-marker />
  </my-map>
</template>
```

In this scenario `my-map` and `my-map-marker` can't communicate with each other using props and events without the consuming template doing a lot of the work to pass things along.

This is where `provide` and `inject` really shine. They allow `my-map` to `provide` values that can then be injected into `my-map-marker`.

While values can only be provided down the component tree, passing a function allows communication back up the tree. For example, let's say we want `my-map-marker` to be able to register itself with the `my-map` component. We might implement that like this:

```js
// my-map.vue
const register = () => {
  /* ... various logic ... */

  return { map, unregister }
}

provide('register-marker', register)
```

```js
// my-map-marker.vue
const register = inject('register-marker')

const { map, unregister } = register()

onUnmounted(unregister)
```

The usage pattern here is very similar to using a composable. The `register` function behaves much like a `useX` function, returning an object that contains everything the caller might need.

For more complete examples of this pattern, see the [accordion](../components/accordion.html) and [tabs](../components/tabs.html) components.

While this registration pattern can be useful, it isn't the only way to use `provide` and `inject` for communicating between tightly coupled components. Data and functions can be passed down to emulate props and events respectively. The [Radio Group example](../components/radio-group.html) does something similar.

## Alternatives

Sometimes it's possible to implement this type of tight coupling using `render` functions and direct manipulation of the VNodes. That requires digging into the internals of Vue, which can lead to some unpleasant surprises if you aren't sure what you're doing. I created a library called [`@skirtle/vue-vnode-utils`](https://skirtles-code.github.io/vue-vnode-utils/) that makes this kind of VNode manipulation a little easier. There's an [accordion example](https://skirtles-code.github.io/vue-vnode-utils/examples.html#adding-component-v-model) in that library's docs that is functionally very similar to the one mentioned above.

Another alternative is to use scoped slots, though they require the consuming template to get involved.

For example:

```vue
<template>
  <my-map v-slot="props">
    <my-map-marker v-bind="props" />
    <my-map-marker v-bind="props" />
    <my-map-marker v-bind="props" />
  </my-map>
</template>
```

The `props` object is created by the `my-map` component and is passed to the `<slot>`. The consuming template shown above then passes that on to each `my-map-marker` using `v-bind`.

For the maps example, this probably isn't the way to go. The extra hassle in the consuming template isn't worth it when the components are that tightly coupled. However, scoped slots tend to be preferable in cases where the components are not tightly coupled, allowing the consuming component to decide which components should be tied together.
