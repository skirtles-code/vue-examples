<script setup>
import Minesweeper from './minesweeper.vue'
</script>

# Minesweeper

The classic computer game.

Players begin with a rectangular grid of buttons. Clicking a button reveals what is lurking behind.

Behind some of the buttons are mines (bombs). The player loses if they click on a mine.

Behind the other buttons are numbers, indicating how many mines are adjacent to that button. Diagonals are included, so central squares have 8 adjacent squares, whereas corner squares have just 3.

If a square has no adjacent mines, the square is shown as empty, rather than 0. When such a square is revealed, all adjacent squares will also be revealed. This saves the player from having to click the buttons for squares that they already know are not mines.

Players can also place flags on buttons by right-clicking (ctrl+click on Mac). Flags help the player to keep track of where mines are located. If a flag is placed incorrectly, it must be removed before the square can be revealed.

The player wins by revealing all of the squares that do not contain mines.

The game should be implemented to ensure that a player's first click will never reveal a mine.

## Example

<live-example>
  <minesweeper />
</live-example>

View it on the [SFC Playground](https://play.vuejs.org/#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)

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
