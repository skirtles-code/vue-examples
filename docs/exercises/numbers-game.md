<script setup>
import NumbersGame from './numbers-game.vue'
</script>

# Numbers Game

This game is based on the 'numbers game' from the British game show [Countdown](https://en.wikipedia.org/wiki/Countdown_(game_show)), which is itself based on the French TV show [Des chiffres et des lettres](https://en.wikipedia.org/wiki/Des_chiffres_et_des_lettres).

The rules of the game are mostly quite intuitive, but explaining them in detail makes it seem a lot more complicated than it actually is.

There is a running version of the game at the link below, which you may want to use to get more familiar with the game:

<https://skirtles-code.github.io/vue-numbers-game/>

A rough outline of the rules:

* Players are given 6 starting numbers and a target number. The 6 starting numbers must be manipulated using basic arithmetic to try to reach the target number.
* The target number is between 100 and 999 inclusive. It is chosen at random and is not necessarily achievable.
* Only the operators +, -, × and ÷ may be used. An operation is only allowed if it yields a positive, integer result.
* The 6 start numbers are selected from a set of 24. These consist of the four 'large numbers' 25, 50, 75 and 100, plus two copies of the 'small numbers' 1 to 10.
* The player may choose how many large numbers they want, from 0 to 4.
* Each of the start numbers may only be used once in the calculation. Similarly, the output of an operation may only be used once in subsequent steps.
* Not all of the 6 starting numbers need to be used.

Example game:

```
Target: 377
Start numbers: 50 8 7 7 5 3

Possible solution:
Step 1: 50 - 3 is 47
Step 2: 47 × 8 is 376
Step 3: 7 ÷ 7 is 1
Step 4: 376 + 1 is 377

The number 5 is not used in this solution

Alternative solution:
Step 1: 50 × 7 is 350
Step 2: 7 × 5 is 35
Step 3: 350 + 35 is 385
Step 4: 385 - 8 is 377

The number 3 is not used in this solution
```

## Example

A basic implementation of the game might look something like this:

<live-example>
  <numbers-game />
</live-example>

View it on the [SFC Playground](https://play.vuejs.org/#eNqVV9tu4zYQ/ZVZP6zl2JZsA2lRJ/FuCxTtSxug6ZsVFLJE22ookpAoJ4Hhf++QFCVS1u52ESSS5nLmPmTOo5+FCE81Ga1H91Va5kJCRWQtNjHLC8FLCWdIeSFqSbIZlCRJZX4i6m0PF9iXvIAxqo9jFrOUs0oCFxU8wDlmAOPpeA1BMoPdBB42kMAUdjPNmPcYc8u46TFuLCPqMSLYxezSmaVJeSBoGB0LlpOOXsmklH/WxY6Uyi/FZjWlKGH4yD4QOcRh5E0+SSIa3njcciqkGjCTjmD7rC0aW+T1t6QggedDTulfpEhylrMDKtqMBoGOhhn3WonAdTo8JbTGjGujE426rxna5QyI4iWSPApSJoqCERTLGdZgpkBXE1MH40VJqpqqSLFCWy6eG1ktp1ABJWRdMiu4gQV8/Ah/JPIYlrxmWWAY6PKDil0LfbIva9gntCJNTVoPh0NTHjYeV56PjLxi2Cq32zAMteyz8W3PSwhshwHfXyNYjJxl5G2JEA1YqAmP+4CL7UIVSolaXiVonpLA6MxAdU4PaTWMtPoa0qpDsmxRV8fgul4YJReqqgA6cQ4eDl8Q7GaQdDPi16mR7KecM9W1vzJJSmwvJ7mqg3Qwpq9NY4UlETRBx6M4rqLDDHSfW5UikekRdZRqqD+CKIjjbDoJttM4nt/EcfQ8MZSo8S7fQ6BFe3XZ/qObbfkky65D8eMZ8bW8K6wEkT5tFHosVRPFUurGqMNsJt00kDt4JmDsp6FeaYbNVljZbeIxETWSH7D158s2MixXozjQSFak30zXpuwAesZW18auRvmbC6DDNch2hB1IMKvFdOjW17dN3sTqdQ6aH+Pet0xsQu9FP/CP35wiT18eGQmSsvR6U0eMiHrb7CnnZWAWT8IyXmAf3wCqhJSwgzz6Y6DobvZV8nHQ+5b95WxsfyEgkw9jC4kLY65tMN1dzVpyDp/ukNmubmdwu5jBj/hcLpQv7QwWCaWOpLvdKJ5DORKXd/i4x+fiDqbTvC2Wq2uqlc8gd3eHB4PaCGN8MwH6cCoSA2OL4obh7aQh3B9wIX0Htuu8v+++seyuz0IzQ7j3FNuc3y3jK/3z02KBFxAsBwKj7fvI3HfwpoMfkhS4BiXBL4D7LD9BSpOqeohHHA/qMh5pRo8luZjvko6J7EokbPM7f8WNxt6bS0kz8J/QouJ2soSSVMJpXvCMUMTT4g4aynChm/c0xxKgRKB26ASnBW7jEax11EhmnhLA+QwMLu1EIk5kgDrjkbHeEXa1lGjpc4qT9IKY7rx48EiDgyK2UEbVZijCFNn3Y+nkzYlclpwdNn/r2q3RF/Ot/G7uY9Z5D20I40m5aVPsQ3md8y/PWTDG420yjG0bAFOd73X43Q5wC1xTtzw0b0vT35yqSBpkoDbqcLtc1CveZcyLPtXwFa/O5/9xr/OLS3OnsI6HA0XVm54LvJ66bv2SpC9fqGcv713m7RYr7fnaz7539nb571z3ChB5I4iEnOEd2Yq2VfFAmxW9gaW6qX7ocXOW0jojVWB6CiPu0OzI2ROg431+Ie8Cj8kqJOoKpTZAd6GyYu42GHbt2nibQtP2+r+HI8k+9JvRvnkZwc9KvlMCVYoX3wwpoV5MZuGKJMtUAWC1EG93zcnXCGxw9U3xVwsWaDpn8x3HAhdrXOUOEbdZD6DZb0MQqKt/lq28Kj46iJ6NLv8B64OaUg==).

For a much more embellished version of the game, see (as linked earlier):

<https://skirtles-code.github.io/vue-numbers-game/>

That version is also implemented in Vue, and its code can be seen in [its GitHub repo](https://github.com/skirtles-code/vue-numbers-game).

## Features Used

It's up to you how far you want to take this exercise. The basic example above only scratches the surface, whereas the more advanced example probably goes too far. Decide for yourself when you're happy to stop adding extra functionality.

For the basic implementation shown above:

* It is written using a single component.
* It uses a Single-File Component with `<script setup>`.
* Reactivity comes from `reactive()`, `ref()` and `computed()`.
* The template uses:
  * Text interpolation, `{{ ['{', '{ ... }', '}'].join('') }}`.
  * `v-if` conditional rendering.
  * `v-for` for looping.
  * `v-model` for two-way binding on the `<input>` and `<select>`.
  * `v-on`/`@` for handling events.

The more advanced version uses a lot of other Vue features:

* `v-bind`/`:`.
* Multiple components, communicating with props, slots, events and `v-model`.
* Watchers.
* `<TransitionGroup>`.
* `v-bind` in CSS.
* Lifecycle hooks.
* Template refs.
