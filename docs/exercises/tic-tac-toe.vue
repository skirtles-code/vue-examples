<script setup>
import { computed, reactive, ref } from 'vue'

const board = reactive([])
const player = ref('X')

const winningCells = computed(() => {
  const wins = ['012', '345', '678', '036', '147', '258', '048', '246']

  for (const cells of wins) {
    const indexes = cells.split('').map(Number)
    const line = indexes.map(index => board[index]).join('')

    if (line === 'XXX' || line === 'OOO') {
      return indexes
    }
  }

  return null
})

const winningPlayer = computed(() => {
  const indexes = winningCells.value

  if (indexes) {
    return board[indexes[0]]
  }

  return null
})

const gameOver = computed(() => {
  return !!winningCells.value || board.join('').length === 9
})

function cellClick(cell) {
  if (board[cell] || gameOver.value) {
    return
  }

  board[cell] = player.value
  player.value = 'XO'.replace(player.value, '')
}

function restart() {
  board.length = 0
  player.value = 'X'
}

function toIndex(row, column) {
  return row * 3 + column - 4
}

function cellClass(index) {
  const value = board[index] ?? 'empty'

  return [
    `cell-${value.toLowerCase()}`,
    { win: winningCells.value?.includes(index) }
  ]
}
</script>

<template>
  <div class="board" :class="{ active: !gameOver }">
    <div v-for="row in 3" class="row">
      <div
          v-for="cell in 3"
          class="cell"
          :class="cellClass(toIndex(row, cell))"
          @click="cellClick(toIndex(row, cell))"
      />
    </div>
  </div>
  <div v-if="gameOver">
    Game over!
    <template v-if="winningPlayer">
      {{ winningPlayer }} wins
    </template>
  </div>
  <div v-else>
    {{ player }} to play
  </div>
  <button @click="restart">
    Restart
  </button>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
}

.row {
  display: flex;
  flex: 1;
}

.row + .row .cell {
  margin-top: -2px;
}

.cell {
  align-items: center;
  border: 2px solid #000;
  cursor: default;
  display: flex;
  flex: 1;
  font-size: 48px;
  justify-content: center;
  line-height: 1;
}

.cell + .cell {
  margin-left: -2px;
}

.cell-x {
  color: red;
}

.cell-x::before {
  content: "X";
}

.cell-o {
  color: #009;
}

.cell-o::before {
  content: "O";
}

.active .cell-empty {
  cursor: pointer;
}

.active .cell-empty:hover {
  background: #eee;
}

.win {
  background: #cfc;
  border-color: #070;
  z-index: 1;
}
</style>
