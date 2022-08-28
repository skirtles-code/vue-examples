# Global Properties

TLDR: You probably want [ES modules](#es-modules) instead.

In Vue 2 it was possible to create 'global properties' by doing something like:

```js
Vue.prototype.$http = axios.create({ /* ... */ })
```

This would then be available in all components by accessing `this.$http`.

In Vue 3 there isn't a `Vue.prototype`, but there are various alternatives to solve the same problems. Whether it's appropriate to describe them as 'global', or even as 'properties', is questionable in some cases, but the desired outcome remains the same.

## `app.config.globalProperties`

The most direct replacement in Vue 3 is called `globalProperties`:

```js
const app = createApp({ /* ... */ })

app.config.globalProperties.$http = axios.create({ /* ... */ })
```

This allows us to use `this.$http`, just like in Vue 2.

You'll find this approach used in some official Vue libraries. For example, Vuex exposes `$store` and Vue Router exposes `$router` and `$route`. The mapping helpers provided by Vuex, e.g. `mapState`, all rely on using `this.$store` to access the correct store. These helpers wouldn't be possible using most of the other techniques described on this page.

However, the use of `globalProperties` in those official libraries shouldn't be seen as an endorsement to use them everywhere. Those libraries have some specific requirements that typically don't apply to application code.

There are a few problems with using `globalProperties`, including:

1. There's no `this` inside `setup`.
2. The properties exist in components without any explicit definition.

The `$` prefix tends to be well understood as meaning 'magically injected from outside', but, if the name doesn't give a clear indication of where exactly it came from, it can cause confusion, especially for new developers. However, if this technique is used sparingly, and only for properties that are used often, it is unlikely to cause any serious impediment to understanding.

What one person describes as 'more explicit', another might call 'verbose' or 'unnecessary boilerplate'. Such terms can be used to express a subjective view of a technique, but they aren't an objective proof of the superiority of one approach over another.

In particular, these global properties can be useful to expose helper functions to the template. For example, `globalProperties` might be used to share formatting functions:

```js
app.config.globalProperties.$format = {
  currencyUSD (value) {
    return '$' + value.toFixed(2)
  }
}
```

```html
<span>{{ $format.currencyUSD(item.unitPrice) }}</span>
```

This would be one way to replace *filters*, which no longer exist in Vue 3.

Other use cases for `globalProperties` in templates might be viewport breakpoints or permissions checks:

```html
<template v-if="$viewport.isNarrow">
  <admin-menu v-if="$permissions.has('admin')" />
  <user-menu v-else />
</template>
```

An alternative in this case would be to use a component instead, which we'll discuss [later](#using-components-instead-of-properties).

`globalProperties` work nicely for things you only need in the template, or if you're using the Options API.

But the lack of availability in `setup` is a major problem, so let's consider some other alternatives to `globalProperties`.

## Application-level `provide` / `inject`

The standard solution for use with the Composition API is to use `provide` on the application and `inject` in `setup`. The latter will usually be wrapped in a dedicated helper function. We see this approach with Vuex and Vue Router, which have functions such as `useStore` and `useRouter` implemented this way.

Returning to the earlier example for `axios`:

```js
const app = createApp({ /* ... */ })
const http = axios.create({ /* ... */ })

app.provide('http', http)
```

While we could use `inject('http')` directly in each component, it'd be better to create a wrapper that hides the implementation details behind an abstraction:

```js
const useHttp = () => {
  return inject('http')
}
```

In practice, this would often use a `Symbol` instead of a string key, ensuring no naming collisions can occur. This would then be wrapped up in a plugin. A more realistic example might look something like this:

```js
// main.js
import { createApp } from 'vue'
import { plugin } from './axiosPlugin.js'

const app = createApp({ /* ... */})
app.use(plugin)
```

```js
// axiosPlugin.js
import { inject } from 'vue'
import axios from 'axios'

const injectionKey = Symbol('http')

export const useHttp = () => inject(injectionKey)

export const plugin = {
  install (app) {
    const http = axios.create({ /* ... */ })
    app.provide(injectionKey, http)

    // It is common to use both `app.config.globalProperties`
    // and `provide` in the same plugin 
    app.config.globalProperties.$http = http
  }
}
```

```vue
<script setup>
import { useHttp } from './axiosPlugin.js'

const http = useHttp()
</script>
```

## ES modules

While the techniques above can be very useful, in many cases there's no need to reach for a Vue-specific solution at all. ES modules are often more than adequate for sharing 'global' values.

Taking the `axios` example, we could just export the instance from a module:

```js
// http.js
export default axios.create({ /* ... */ })
```

That can then be imported wherever we need it:

```js
import http from './http.js'
```

This flips the dependency. Rather than having a value injected from outside, the dependency is an explicit import from a specific location. The gain in explicitness comes with a small loss in the reusability of the component.

ES modules also work well outside of Vue components. For the `axios` example, it's common to need the same `axios` instance in Vuex actions. While there are other ways that can be achieved, using an ES module is the most widely used in real applications.

## Sharing state using Pinia or Vuex

It can also be useful to share state globally. We could just use ES modules and Vue's Reactivity APIs to implement shared state ourselves:

```js
export default reactive({})
```

Then anything that needs this state object can use `import` to pull it in.

However, this roll-your-own approach tends to lead to problems. Standard solutions, such as [Pinia](https://pinia.vuejs.org/) or [Vuex](https://vuex.vuejs.org/), provide several benefits:

- Documented APIs.
- Familiarity among developers.
- Standard usage patterns that, by design, avoid common problems.
- Integration with Vue Devtools.
- You don't have to maintain the code yourself.

So if you need a reactive, central store for your state, you should probably be using either Pinia or Vuex.

## Global mixins

This is rarely the right approach, but it is worth being aware that global mixins can be used as an alternative to `globalProperties`. For example:

```js
const app = createApp({ /* ... */ })

app.mixin({
  computed: {
    $value () {
      // We have access to `this` if we need it.
      // Using `computed` makes this reactive.
    }
  }
})
```

Global mixins add extra overhead to the creation of every component in your application, which usually makes them unsuitable for anything other than debugging trickery used during development.

## Using components instead of properties

Earlier we saw how `globalProperties` could be used for exposing things like viewport breakpoints of permissions to the template.

An alternative approach would be to implement these features using components. These would be *renderless components*, just rendering the contents of their slots if the relevant criteria are met. e.g.:

```html
<permission-check name="admin">
  <admin-menu />
</permission-check>
```

If you want the equivalent of `v-if`/`v-else` you can use two slots:

```html
<permission-check name="admin">
  <template #allowed>
    <admin-menu />  
  </template>
  <template #denied>
    <user-menu />    
  </template>  
</permission-check>
```

The `permission-check` component would still need some way of accessing the 'global' data, and for that it would use one of the other techniques described on this page. The key thing about this approach is that only this one component would need to worry about how the global data is passed around, everything else would just use the component. If you need to refactor how the data is passed around it will only impact this one component. 

To give a concrete example of how `permission-check` might be implemented in conjunction with Vuex:

```js
import { useStore } from 'vuex'

// Using a functional component, so this is effectively just a render function.
// It doesn't render any VNodes of its own, just those created by its slots.
const PermissionCheck = ({ name }, { slots }) => {
  const hasPermission = useStore().state.permissions[name]
  
  if (hasPermission) {
    return slots.allowed?.() || slots.default?.()
  }
  
  return slots.denied?.()
}
```

Using a functional component isn't strictly necessary, but they are well suited to creating renderless components like these.

## Patching third-party libraries

Some third-party libraries, especially those ported from Vue 2, add values to `globalProperties` via a plugin, but don't `provide` the value for compatibility with `setup`.

This is usually relatively easy to patch.

Let's assume we have a third-party plugin like this:

```js
// axiosPlugin.js
import axios from 'axios'

export default {
  install (app) {
    app.config.globalProperties.$http = axios.create({ /* ... */ })
  }
}
```

We can add the `provide` call ourselves from within `main.js`, after the plugin creates the property:

```js
// main.js
import { createApp } from 'vue'
import axiosPlugin from './axiosPlugin.js'

const app = createApp({ /* ... */ })
app.use(axiosPlugin)
app.provide('http', app.config.globalProperties.$http)
```