# Global Properties

TLDR: You probably want [ES modules](#es-modules) instead.

In Vue 2 it was possible to create 'global properties' by doing something like:

```js
Vue.prototype.$http = axios.create({ /* ... */ })
```

This would then be available in all components by accessing `this.$http`.

This is no longer possible with Vue 3, but there are various alternatives. Whether it's appropriate to describe them as 'global', or even as 'properties', is questionable in some cases, but the desired outcome remains the same.

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

In particular, these global properties can be useful to expose helper functions to the template. These might be formatting functions, viewport breakpoints, or permissions checks.

But the lack of availability in `setup` is a bigger problem.

## Application-level `provide` / `inject`

The standard solution for use with the Composition API is to use `provide` on the application and `inject` in `setup`. The latter will usually be wrapped in a dedicated helper function. We see this approach with Vuex and Vue Router, which have functions such as `useStore` and `useRouter` implemented this way.

Continuing the earlier example for `axios`:

```js
const app = createApp({ /* ... */ })
const http = axios.create({ /* ... */ })

app.config.globalProperties.$http = http
app.provide('http', http)
```

There would then be a helper to use in `setup`:

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
    app.config.globalProperties.$http = http
    app.provide(injectionKey, http)
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

## Sharing state using Vuex or Pinia

It can also be useful to share state globally. We could just use ES modules and Vue's Reactivity APIs to implement shared state ourselves:

```js
export default reactive({})
```

Then anything that needs this state object can use `import` to pull it in.

However, this roll-your-own approach tends to lead to problems. Standard solutions, such as [Vuex](https://next.vuex.vuejs.org/) or [Pinia](https://pinia.esm.dev/), provide several benefits:

- Documented APIs.
- Familiarity among developers.
- Standard usage patterns that, by design, avoid common problems.
- Integration with Vue Devtools.
- You don't have to maintain the code yourself.

So if you need a reactive, central store for your state, you should probably be using either Vuex or Pinia.

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
import axiosPlugin from './axiosPlugins.js'

const app = createApp({ /* ... */})
app.use(axiosPlugin)
app.provide('http', app.config.globalProperties.$http)
```