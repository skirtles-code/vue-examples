# Working with Image Assets

Let's imagine you have something like this in a Vue component template:

```vue
<img src="../assets/image.png">
```

It works fine. You then try to change it to something dynamic:

```vue
<img :src="imgSrc">
```

`imgSrc` is a string containing the path from the original code, yet it doesn't work. But, why? Surely they're equivalent?

Another way you might encounter the same problem is trying to pass the path to a component rather than an `<img>`. For example:

```vue
<!-- Works -->
<img src="../assets/image.png">

<!-- Doesn't work -->
<my-image-component src="../assets/image.png" />
```

## Assets and Build Tools

You'll encounter the same problem with both Vite and Vue CLI (webpack).

Both tools have a convention of putting assets such as images in the folder `/src/assets`, but there's no special handling for that folder in those tools. Assets need to be imported into your JS/TS code, just like other dependencies. If they aren't imported then they'll be discarded as part of the tree-shaking process and won't be included in the final build output.

As part of the build process the images will be copied and renamed. So even though you have `../assets/image.png` in your code, that isn't where the image will be in a production build. The actual path will be something like `/assets/image.12345678.png`, including a hash of the file contents for cache-busting purposes. Importing the image will yield the correct path to use at runtime.

So, for example:

```vue
<script setup>
// In production, imgSrc will either be a string path
// like '/assets/image.12345678.png', or a base64 encoded
// data URL if the image is small enough.
import imgSrc from '../assets/image.png'
</script>

<template>
  <img :src="imgSrc" />
</template>
```

## Why Does a Static `src` Work?

So if images need to be imported, why does `<img src="../assets/image.png">` work just fine?

That's a special case. The build tools look for `<img src>` and import that path automatically. They do the same with several other native HTML elements too, and can be configured to work with custom components. The specifics depend on what tools you're using:

- Vite: [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue#asset-url-handling)
- Vue CLI / webpack: [Vue Loader](https://vue-loader.vuejs.org/guide/asset-url.html)

But that can only handle static paths, hard-coded directly into the template.

## Dynamic Paths

### `import`

Using an `import` statement doesn't allow for dynamic paths, but if you only have a small number of images then that's not necessarily a problem. The images can be statically imported individually, with other code to choose the appropriate image:

```vue
<script setup>
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'

defineProps(['done'])
</script>

<template>
  <img :src="done ? img1 : img2" />
</template>
```

### `import()`

It is theoretically possible to use the `import()` function to import an image, but that will wrap the value we need in a promise. It can be made to work, but it's fiddly:

```vue
<script setup>
import { ref } from 'vue'

const imgSrc = ref()

import('../assets/image.png').then(imageImports => {
  imgSrc.value = imageImports.default
})
</script>

<template>
  <img v-if="imgSrc" :src="imgSrc" />
</template>
```

The advantage of `import()` is that the path can be dynamic, e.g. ``import(`../assets/${name}.png`)``. Thankfully there are other ways to achieve this that don't involve promises. With Vite we can use [`new URL()`](#new-url) or [`import.meta.glob()`](#import-meta-glob), and with Vue CLI / webpack we can use [`require()`](#require).

Whichever approach we use, it's important to understand roughly how they work. All of them rely on static analysis at build time. This means that the build tool is searching through your code for one of these constructs and then attempts to parse out the path. It isn't purely a runtime process. They can all handle dynamic paths to some extent, but you need to make it easy for them. If you write something like `import(srcUrl)` then the build tool won't be able to figure out which files `srcUrl` might match. Something like ``import(`../assets/${name}.png`)``, which includes some parts of the path statically, gives the tooling the hints it needs to import all `.png` files in the `../assets` directory.

### `new URL()`

If you're using Vite then images can be included dynamically using `new URL()`:

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps(['icon'])

const imgSrc = computed(() => {
  return new URL(`../assets/${props.icon}.svg`, import.meta.url).href
})
</script>

<template>
  <img :src="imgSrc" />
</template>
```

There are three important caveats when using this approach:

1. You can't start the path with an alias, such as `@`.
2. Dynamic paths must use template literals (i.e. strings with backticks), passed inline as the first argument to `new URL()`. No other form of dynamic value is supported.
3. SSR is not supported.

See [the Vite docs](https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url) for more information.

### `import.meta.glob()`

Vite supports importing many files at once using globs. This is asynchronous by default, but we can use the `eager` option to make the path resolution synchronous:

```vue
<script setup>
const imgUrls = import.meta.glob('../assets/*.png', {
  import: 'default',
  eager: true
})

defineProps(['icon'])
</script>

<template>
  <img :src="imgUrls[`../assets/${icon}.png`]">
</template>
```

`import.meta.glob()` returns an object, with property keys being the source file names. Aliases are supported, but they will be expanded out to the equivalent relative path, beginning with `./` or `../` as appropriate.

Having the relative path as the property key isn't always convenient, but we can map it to something else:

```vue
<script setup>
// We take an object in this form:
// {
//   "../assets/home.png": "/assets/home.12345678.png",
//   "../assets/logout.png": "/assets/logout.12345678.png"
// }
// and map it to one with simpler property keys:
// {
//   "home": "/assets/home.12345678.png",
//   "logout": "/assets/logout.12345678.png"
// }
const simplifyKeys = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      // Remove the directories and the extension
      key.replace(/^.*\/|\.png$/g, ''),
      value
    ])
  )
}

const imgUrls = simplifyKeys(
  import.meta.glob('../assets/*.png', {
    import: 'default',
    eager: true
  })
)

defineProps(['icon'])
</script>

<template>
  <img :src="imgUrls[icon]">
</template>
```

See [the Vite docs](https://vitejs.dev/guide/features.html#glob-import) for more information about glob imports.

If you're using Vite 2 then you'll need to use `globEager` instead. See [the Vite 2 docs](https://v2.vitejs.dev/guide/features.html#glob-import) for more information.

### `require()`

If you're using a webpack-based build tool, such as Vue CLI, then you can use `require()` to import the images. `require()` behaves a bit like a synchronous version of `import()`. e.g.:

```js
const imgUrl = require('../assets/' + name + '.png')
// ... or ...
const imgUrl = require(`../assets/${name}.png`)
```

It can also be used directly inside a Vue template:

```vue
<template>
  <img :src="require(`../assets/${name}.png`)" />
</template>
```

Much like with the other approaches described above, `require()` needs a partially static path, so that webpack can figure out which files are possible matches. The following will not work:

```vue
<template>
  <!-- This won't work, there must be some static path -->
  <img :src="require(imgUrl)" />
</template>
```

See [the webpack documentation](https://webpack.js.org/guides/dependency-management/) for more information.

## `/public`

Both Vite and Vue CLI have support for a `/public` folder. This is a special folder for files that should always be included in the build, even though they are not imported anywhere. These files cannot have cache-busting hashes added, as their names need to be left unchanged so you can use them in your code.

Using `/public` can be a good option if there are a lot of images that never change, making the hashing unnecessary. However, it does come with its own problems.

Let's assume we put our images in `/public/images`. We won't be able to reference them with static strings in the template, because those will be automatically converted to imports:

```vue
<!-- This will fail, files in /public can't be imported -->
<img src="/images/image.png">
```

To get around that, we can trick the tools by using `:src` instead of `src`:

```vue
<!-- Using :src to bypass the automatic import -->
<img :src="'/images/image.png'">
```

We also need to be careful if we're using a [base path (Vite)](https://vitejs.dev/guide/build.html#public-base-path) or [publicPath (Vue CLI / webpack)](https://cli.vuejs.org/config/#publicpath). Those won't be automatically prepended to the URL, so we need to do it ourselves.

* Read more about the `/public` folder in [the Vite docs](https://vitejs.dev/guide/assets.html#the-public-directory).
* Read more about the `/public` folder in [the Vue CLI docs](https://cli.vuejs.org/guide/html-and-static-assets.html#the-public-folder).
