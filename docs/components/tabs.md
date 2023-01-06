<script setup>
import TabsExample from './tabs/example.vue'
</script>
# Tabs

## Tabs Example

There are various ways to split a tabbed UI up into components. In this example we're going to use two components, an outer container called `tabs` and an inner container for each child called `tab`:

<<< @/components/tabs/example.vue

<live-example>
  <tabs-example />
</live-example>

[SFC Playground](https://sfc.vuejs.org/#eNqdVs1u4zYQfpVZ7SEKasneos0Cahy0PfTaors9rXuQJcpmViJZknISGH73zpCUTCV24t0AQcT5//0m++Q3pfJdz5IiuTWV5sqCYbZXdyvBOyW1hd9Lw6vP5dpAo2UHV/l8pJDi1QvBF3JB7HbuHaBpfFjWqba0DF8At2sSzSzadO+YApbbli1XyR9cG7tKggCAewNJVFJYJmzQnI+q5219YqhTR8bGeGCXNVKjCAcu4MdFJAPg1WKfsN8Dh8PhKHO71miDN87Eu+VyauN2Pkn8wnA/b7mOo3Xvt1OP3lTXyHcyS3zXsq5U+b2RAgdgTzoYtWOYVVKAoxANO0jvVbK1VpliPjdNRW29N7nUmzl+5boXlncsZ6bL1lo+GKbR8CqZRTbmSNwxnWkmaqaZfs3mM9EXdskslv2AqUwG8vwk77Faneotq2egtNzxms1As7KyfOe+GjiE4fUTuxJYXpwxLwFLEklF37bXA4cq6+heJP3yL7ImajRSS9eq5Z2vpxfNd2XbBxZmQVohpvSKrGLiG24s01eziTbxctWbbYpfzhkAbyB9F5u9Hjo3hBCEXcXoj8bKaDGRYsVYnjS9Jn/TQHGSyQi20yv1YogQUDxYAhpITJ1j0x59ciZ3jz+bMQb6cQyjWl6x1PFn8CFkQz+U0Un3R0fT5MyXBZXeM8I2uj80Ish4DXxqvoOqLY3BTSNT46JNOFtW4iDGq7zurZVjyDAiB7ULscObOrIjF1lQjbjFwN6P7XBtx7zD+B1i8V8rLN1XFJ92eJS4Q1xCSu4QBPEJocC5HFEHUzuV5VrWT3GOppUW5i+0hq8JnOHT2Cd0ZyqpWI2U3O2Ha9laaixfAR/UIxjZ8hreV1X1C7FqjoNQPhXQtOzRUegjq7lmmJwUNJht3wnH2jK+2doCUXWhvPADr+22gJ8CwU147rsVXJfV142WvagzNCQxiPfsprlpGqfuA8vWEsvTXRifKuuaiw1GgdL0uxgdH7v73Dm6bSY+Tzp7Fg4ZHom6rHlvCvgZ1eh3EdhVrw2lpSTHa6AdrSv1hotMh2qFWnVICvX6ONRvTAZNnkij2ErE4bOVbD42lcvK64VZfVN6DHBINMNaxOGMjJsoKprOS2yfniis91vTRak2rXwooOyt9H4ROmiq6WbG/9G8dme4uEfjM5DiH9FhkO7kHC+NlX+fvTV4BBSdlJo1XLC/6JV64KdNHk+yZv/1mAEOldU9CzfWPimU+GQ11i/CvsH0iNfLEODzSxPJOuw53rU4Ahd96uKcwZUjkmbsacCwWXwlDs6gf4zHK6pQepS9ALDDv1jezyqJ0fWI3xF6XYpYZVXhsuFcZKoUrPX1/gaEGtZgauUHOG04LIGVyoHBd8PXSSg5Dwsv1226/Zfu2SvO/cKFLTr6XTjPg3vvjT1iRWpWe48TxXj9Dv8DTdREQA==)

The `title` prop is used to pass the text to show on the button, with a slot for the content.

The code for `tabs.vue` looks long, but a lot of it is CSS:

<<< @/components/tabs/tabs.vue

`tab.vue` doesn't need much code:

<<< @/components/tabs/tab.vue

## Vue Patterns

See [Coupled Components with `provide`/`inject`](../patterns/coupled-components-with-provide-inject.html)

<!--
## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include a tabs component, including:

- Ant Design Vue - [Tabs](https://2x.antdv.com/components/tabs)
- Element Plus - [Tabs](https://element-plus.org/en-US/component/tabs.html)
- Quasar - [Tabs](https://quasar.dev/vue-components/tabs) and [Tab Panels](https://quasar.dev/vue-components/tab-panels)
- Headless UI - [Tabs](https://headlessui.dev/vue/tabs)
- PrimeVue - [TabView](https://primefaces.org/primevue/showcase/#/tabview)
- Naive UI - [Tabs](https://www.naiveui.com/en-US/os-theme/components/tabs)
- Oruga - [Tabs](https://oruga.io/components/Tabs.html)
