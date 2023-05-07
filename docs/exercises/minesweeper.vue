<script setup>
import { computed, reactive, ref } from 'vue'

const WIDTH = 15
const HEIGHT = 10

const MINES = Math.round(WIDTH * HEIGHT / 5)

const shake = ref(false)

const grid = reactive([])
let init = false

for (let i = 0; i < HEIGHT; ++i) {
  grid.push([])

  for (let j = 0; j < WIDTH; ++j) {
    grid[i][j] = { value: null, visible: false, row: i, column: j, flag: false }
  }
}

const flagged = computed(() => {
  let count = 0

  for (const row of grid) {
    for (const cell of row) {
      count += cell.flag === 'flag' ? 1 : 0
    }
  }

  return count
})

const gameOver = computed(() => {
  let done = true

  for (const row of grid) {
    for (const cell of row) {
      if (cell.value === true) {
        if (cell.visible) {
          return true
        }
      } else if (!cell.visible) {
        done = false
      }
    }
  }

  return done
})

function getAdjacent(r, c) {
  const cells = []

  for (let i = r - 1; i <= r + 1; ++i) {
    const row = grid[i]

    if (row) {
      for (let j = c - 1; j <= c + 1; ++j) {
        const cell = row[j]

        if (cell && (i !== r || j !== c)) {
          cells.push(cell)
        }
      }
    }
  }

  return cells
}

function reveal(cell) {
  if (cell.flag || gameOver.value) {
    return
  }

  const r = cell.row
  const c = cell.column

  if (!init) {
    init = true

    let mines = MINES

    while (mines) {
      const row = Math.floor(Math.random() * HEIGHT)
      const col = Math.floor(Math.random() * WIDTH)

      if ((row === r && col === c) || grid[row][col].value) {
        continue
      }

      grid[row][col].value = true

      mines--
    }

    for (let i = 0; i < HEIGHT; ++i) {
      for (let j = 0; j < WIDTH; ++j) {
        if (grid[i][j].value !== true) {
          const adjacent = getAdjacent(i, j)

          grid[i][j].value = adjacent.filter(item => item.value === true).length
        }
      }
    }
  }

  if (!cell.visible) {
    cell.visible = true

    if (cell.value === 0) {
      getAdjacent(r, c).forEach(cell => {
        cell.flag = false
        reveal(cell)
      })
    }

    if (cell.value === true) {
      shake.value = true
    } else if (gameOver.value) {
      for (const row of grid) {
        for (const cell of row) {
          if (cell.value === true) {
            cell.flag = 'flag'
          }
        }
      }
    }
  }
}

function onContextMenu(cell) {
  if (gameOver.value) {
    return
  }

  const options = [false, 'flag', 'maybe']

  cell.flag = options[(options.indexOf(cell.flag) + 1) % options.length]
}

function cellClass(value) {
  if (value === true) {
    return 'bomb'
  }

  return `cell-${value}`
}
</script>

<template>
  <div>
    Flagged {{ flagged }} / {{ MINES }} mines
  </div>
  <div class="outer" :class="{ shake, active: !gameOver }">
    <div v-for="row in grid" class="row">
      <template v-for="cell in row">
        <div v-if="cell.visible" :class="cellClass(cell.value)">
          {{ cell.value === true ? '💣' : cell.value || '' }}
        </div>
        <button
          v-else
          :class="[cell.flag, { mine: cell.value === true }]"
          @click.exact="reveal(cell)"
          @contextmenu.prevent="onContextMenu(cell)"
        />
      </template>
    </div>
  </div>
  <div v-if="gameOver">
    Game over, you {{ shake ? 'lose' : 'win' }}!
  </div>
</template>

<style scoped>
.outer {
  border: 1px solid #444;
  display: inline-flex;
  flex-direction: column;
  margin: 10px 0;
  overflow: hidden;
  user-select: none;
}

.row {
  display: flex;
}

.row > * {
  align-items: center;
  border: 1px solid #767676;
  border-radius: 0;
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  height: 24px;
  justify-content: center;
  margin-left: -1px;
  margin-top: -1px;
  padding: 0;
  width: 24px;
}

.row > button {
  background: #e7e7e7;
  box-shadow: 1px 1px rgba(255, 255, 255, 0.75) inset;
  z-index: 1;
}

.active .row > button {
  cursor: pointer;
}

.active .row > button:hover:not(.flag) {
  background: #e0e0e0;
}

.active .row > button:active:not(.flag) {
  background: #ddd;
  box-shadow: -1px -1px rgba(255, 255, 255, 0.75) inset, 1px 1px rgba(0, 0, 0, 0.1) inset;
}

.row > *:last-child {
  margin-right: -1px;
}

.row:last-child > * {
  margin-bottom: -1px;
}

.row > div {
  border: 1px solid #444;
  font-weight: bold;
}

.cell-1 {
  color: #5900fe;
}

.cell-2 {
  color: #008d00;
}

.cell-3 {
  color: #ff0000;
}

.cell-4 {
  color: #290080;
}

.cell-5 {
  color: #830000;
}

.cell-6 {
  color: #008580;
}

.cell-7 {
  color: #000000;
}

.cell-8 {
  color: #808080;
}

.flag::before {
  content: "🚩" !important;
}

.maybe::before {
  content: "❓" !important;
}

.bomb {
  background: #fcc;
}

.outer:not(.active) .mine:before {
  content: "💣";
}

.outer:not(.active) .flag:not(.mine), .outer:not(.active) .maybe:not(.mine) {
  background: #fcc;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
