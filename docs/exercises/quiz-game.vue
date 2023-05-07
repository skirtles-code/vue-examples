<script setup>
import { computed, reactive, ref, watch } from 'vue'
import chemistry from './elements.js'
import music from './abbey-road.js'
import geometry from './platonic-solids.js'
import antiquity from './seven-wonders.js'

const topic = ref('Chemistry')

const question = computed(() => {
  return {
    antiquity,
    chemistry,
    geometry,
    music
  }[topic.value.toLowerCase()]
})

const matched = reactive(new Set())
const answers = reactive([])

const guess = ref('')
const timeTaken = ref(0)
let timerId = null
let checker = null

watch(topic, reset)

function checkGuess() {
  if (!timerId) {
    timerId = setInterval(() => timeTaken.value++, 1000)
    checker = question.value.createChecker()
  }

  const guessValue = guess.value.trim().toLowerCase()

  const valid = checker(guessValue)

  if (!valid) {
    return
  }

  const { index, canonical } = valid

  if (matched.has(valid.canonical) || answers[index] != null) {
    return
  }

  matched.add(canonical)
  answers[index] = canonical
  guess.value = ''

  if (matched.size === question.value.size) {
    clearInterval(timerId)
  }
}

function reset() {
  answers.length = 0
  matched.clear()
  clearInterval(timerId)
  timerId = null
  checker = null
  timeTaken.value = 0
  guess.value = ''
}
</script>

<template>
  <label>
    Topic:
    <select v-model="topic">
      <option>Antiquity</option>
      <option>Chemistry</option>
      <option>Geometry</option>
      <option>Music</option>
    </select>
  </label>
  <h3>
    {{ question.question }}
  </h3>
  <div class="outer">
    <div class="info">
      <div>
        {{ matched.size }} / {{ question.size }}
      </div>
      <div>
        {{ timeTaken }}s
      </div>
    </div>
    <input v-model="guess" @input="checkGuess" :disabled="matched.size === question.size">
    <div class="column-wrap">
      <div
          v-for="index in question.size"
          class="answer"
          :class="{ matched: answers[index - 1] }"
      >
        {{ answers[index - 1] ?? '?' }}
      </div>
    </div>
  </div>
  <button @click="reset">
    Reset
  </button>
</template>

<style scoped>
.outer {
  display: flex;
  flex-direction: column;
}

.info {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

input {
  font-size: 24px;
  padding: 2px 5px;
}

.column-wrap {
  column-gap: 10px;
  columns: 2;
  margin: 10px 0;
}

.answer {
  background: #eee;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px;
}

.matched {
  background: #cfc;
  border-color: #070;
}
</style>
