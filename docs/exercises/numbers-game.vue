<script setup>
import { computed, reactive, ref } from 'vue'

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

const large = ref(1)

const startNumbers = ref(null)
const target = ref(null)
const nextStep = ref('')
const steps = reactive([])

startNewGame()

const stillRemaining = computed(() => numbersRemaining(startNumbers.value, steps))

function evaluateOperation(num1, op, num2) {
  const result = ops[op](num1, num2)

  return result > 0 && Math.round(result) === result ? result : false
}

function numbersRemaining(start, operations) {
  const newNums = [...start]

  for (const op of operations) {
    const index1 = newNums.indexOf(op[0])
    newNums.splice(index1, 1)
    const index2 = newNums.indexOf(op[2])
    newNums.splice(index2, 1)
    newNums.push(evaluateOperation(...op))
  }

  newNums.sort((b, a) => a - b)

  return newNums
}

function onStepEnter() {
  const step = nextStep.value.replace(/\s/g, '')
  const match = step.match(/(\d+)([+\-*\/])(\d+)/)

  if (match) {
    const [_, num1Str, op, num2Str] = match
    const num1 = +num1Str
    const num2 = +num2Str

    const numbers = [...stillRemaining.value]
    const index1 = numbers.indexOf(num1)

    if (index1 !== -1) {
      numbers.splice(index1, 1)

      const index2 = numbers.indexOf(num2)

      if (index2 !== -1) {
        const result = evaluateOperation(num1, op, num2)

        if (result) {
          steps.push([num1, op, num2])
          nextStep.value = ''
        }
      }
    }
  }
}

function pickOne(arr) {
  const index = Math.floor(Math.random() * arr.length)

  return arr.splice(index, 1)[0]
}

function startNewGame() {
  nextStep.value = ''
  steps.length = 0

  const nums = []

  const largeNumbers = [25, 50, 75, 100]
  const smallNumbers = []

  for (let i = 1; i <= 10; ++i) {
    smallNumbers.push(i, i)
  }

  for (let i = 0; i < large.value; ++i) {
    nums.push(pickOne(largeNumbers))
  }

  for (let i = 0; i < 6 - large.value; ++i) {
    nums.push(pickOne(smallNumbers))
  }

  nums.sort((b, a) => a - b)

  startNumbers.value = nums

  target.value = Math.floor(Math.random() * 900 + 100)
}
</script>

<template>
  <div class="outer">
    <div class="top-bar">
      <span>How many large numbers?</span>
      <select v-model="large">
        <option v-for="(_, n) in 5" :value="n">
          {{ n }}
        </option>
      </select>
      <button @click="startNewGame">
        New game
      </button>
    </div>
    <hr>
    <div>
      <strong>Target:</strong> {{ target }}
    </div>
    <div>
      <strong>Start numbers:</strong> {{ startNumbers.join(', ') }}
    </div>
    <template v-if="steps.length">
      <ul>
        <li v-for="[num1, op, num2] in steps">
          {{ num1 }} {{ op }} {{ num2 }} = {{ evaluateOperation(num1, op, num2) }}
        </li>
      </ul>
      <button @click="steps.pop()">
        Back
      </button>
      <div>
        <strong>Numbers remaining:</strong> {{ stillRemaining.join(', ')}}
      </div>
    </template>
    <input
      v-if="stillRemaining.length > 1 && !stillRemaining.includes(target)"
      v-model="nextStep"
      @keypress.enter="onStepEnter"
    >
    <div v-if="stillRemaining.includes(target)">
      Target reached!
    </div>
  </div>
</template>

<style scoped>
.outer {
  padding: 20px;
}

.outer > * + * {
  margin-bottom: 0;
  margin-top: 20px;
}

.top-bar > * + * {
  margin: 0 0 0 10px;
}
</style>
