<script setup>
import QuizGame from './quiz-game.vue'
</script>

# Quiz

There are lots of ways to implement a quiz.

A common approach is to use multiple choice questions, allowing the player to click on the correct answers.

The example shown below takes a different approach, with the player typing answers into a text input. Correct answers are shown beneath, after they are typed in.

## Example

<live-example>
  <quiz-game />
</live-example>

View it on the [SFC Playground](https://play.vuejs.org/#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)

Some questions allow for slight variations on the answer, such as case insensitivity, ignoring punctuation, or allowing different ways to word an equivalent answer.

The answers to the **Music** question are in a particular order. They don't have to be entered in that order, but matches are shown in the correct order.

The answers to the **Chemistry** question are dynamic, changing based on previous answers.

## Features Used

Your implementation doesn't need to use the same Vue features as the example above, but to give you some idea of the knowledge you might need to attempt this:

* The example above is written using a single component, with separate `.js` data files for each question.
* It uses a Single-File Component with `<script setup>`.
* Core reactivity functions: `reactive()`, `ref()`, `computed()` and `watch()`.
* The template uses:
  * Text interpolation, `{{ ['{', '{ ... }', '}'].join('') }}`.
  * `v-for` for looping.
  * `v-model` for two-way binding on the `<input>` and `<select>`.
  * `v-on`/`@` for handling events.
  * Attributes bindings with `v-bind`/`:`.
