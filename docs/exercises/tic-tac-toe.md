<script setup>
import TicTacToe from './tic-tac-toe.vue'
</script>

# Tic-tac-toe

Also known as **Noughts and Crosses**, or **Xs and Os**.

Players take it in turns to place their symbol in one of the grid squares. A player wins if they form a straight line of 3 in a row. Horizontal, vertical and diagonal lines all count. The game ends with no winner if all squares are filled without forming a line.

## Example

<live-example>
  <tic-tac-toe />
</live-example>

View it on the [SFC Playground](https://play.vuejs.org/#eNqFVW1v2zYQ/isXb4DkNVKdxE1aLU425MMwYJiHfTJgG6giUTZbmhQoyonr+r/v+GopTroPNsl7fe7h8bQf/F7X6bYlg2xw2xSS1goaotr6bsHpphZSwR4KsalbRcpzkCQvFN0SvavgAJUUG4jQPVrwBS8EbxQ8ilyWMAm28Xw59Lqa5TsijbKKo1mECq96opxTvnogjDVo4HPG8RAmd7BfcECZM9QG82h0cRmdQ3Q1/qCX65uPehldXevlYnyjl8sPVjg2y+X4OlrqQPpXCQmxjViYnKIyoYc2l89GeUmeiUGkrdKmZlTFUTRMN3kd/91uHonEKo4OjHKC1s7PWJm9rsJQMzfH5TD9IijXkay3/acVxDbCZALRbDaL4Pt3F1NLptNpFBAC0qhayX0yKz3oxfzpn7PgLWMLfjjl+x9/I28TfqSge0fpNmct8Wk0bmcX4LnUnaJJMx8tzQ38P75VviHT7ZvQnN/Z2SkmzZhJGhhOGeErtTYUfvJpqpZjfwpuLvaB0eJrrHcOvi7IItfCpY7pEdksL8rsFdV1nLimP/LVPaM6mk2jVBKUFiTu6rBjdXO4qAGuJI3KpUIuDABbqS8QRq9mwOeJYTpBlPhTX0gsxdM58svaDXfxHLGogF/gCt45LSQwPg0ym74d4RS5JTpvGtsqztxet8fafSJwfw8R2dRqh/h77TK31H/WEZOf98Y5VeIv8UTkQ96QeHj4fG5t9rprs1da9z6lvGBtSQIcgxfbE9fb93YY4hjEg0IQLFcETwC3Jd1CocuYLAYG7mIAmRfswU69DM5CBx8WA+PpfLcJzh401RRTDlfo7r1RFGyttd9DcNM1O7+j0gfQyq484Dpy37963fHDrsdvhX4KwUM/ix96BLRI9d5d36nDEg6GXVPWe6zLExL2nZ0liVYIwnMYWPkDBSBQcuYC+LvxHr251iETwfVH3uFg5r3H0b/jl2AIa6zGBHKfMYyghDm88HlslcJ+D1S6JxvQ/OvOxssao6aHAY+N2jECTSFqUqIktR9W82bWhK7WKoOr0ah+/lVLnmip1l1BSfFTle8yqBixEr1JSiqJeY2Ze7SoMq861e1ogr/umcFFz/QdmCU17Wj8NrlcUZ4oUWeQXBoY1vxokjO64gnFOhvMT7gi0iQoWtkImUFJqrxl6gcFWBj6881V0tBv+NDGH13JX9pG0WqX4ERRGLuX4VHIkmAGxAWNYLSEn0ajUR8ilnRSDSMVBjopJ3n2w4tp3JKUfbXoqTHVp6C388GmSsx0c7aOgxo/Whb1W/bZWj8AN/7z4utKipaXmIYQEtywt1+xKKqiQwcy5fDdaCoAviVmFIa7xjGom/BucPgPtulfdQ==)

## Features Used

Your implementation doesn't need to use the same Vue features as the example above, but to give you some idea of the knowledge you might need to attempt this:

* The example above is written using a single component.
* It uses a Single-File Component with `<script setup>`.
* Reactivity comes from `reactive()`, `ref()` and `computed()`.
* The template uses:
  * Text interpolation, `{{ ['{', '{ ... }', '}'].join('') }}`.
  * `v-if`/`v-else` conditional rendering.
  * `v-for` for looping.
  * `v-on`/`@` for handling events.
  * Class bindings with `:class`.
