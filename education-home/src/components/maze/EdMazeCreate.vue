<template>
  <div class="container py-1">
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">迷宫生成</h5>

        <div class="row g-3 mb-3">
          <div class="col-md-3">
            <label class="form-label">宽度</label>
            <input type="number" class="form-control" v-model.number="widthInput">
          </div>
          <div class="col-md-3">
            <label class="form-label">高度</label>
            <input type="number" class="form-control" v-model.number="heightInput">
          </div>
          <div class="col-md-3">
            <label class="form-label">速度倍率</label>
            <input type="number" class="form-control" v-model.number="generatSpeed">
          </div>
          <div class="col-md-3">
            <label class="form-label">方格大小</label>
            <input type="number" class="form-control" v-model.number="cellSize">
          </div>
        </div>

        <div class="d-flex gap-2">
          <button class="btn btn-primary flex-grow-1" @click="generatMaze1">
            <i class="bi bi-grid-3x3-gap"></i> 生成迷宫（破墙法）
          </button>
          <button class="btn btn-secondary flex-grow-1" @click="generatMaze2">
            <i class="bi bi-grid-fill"></i> 生成迷宫（造墙法）
          </button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="maze-view border rounded" @click="onClickMaze">
          <canvas style="z-index: 0" ref="canvas"></canvas>
          <canvas style="z-index: 1" ref="canvasChecked"></canvas>
          <canvas style="z-index: 2" ref="canvasPath"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { solveMaze, MazeGanerator } from '@/assets/js/maze/maze.js'

async function waitFrame () {
  return new Promise((resolve) => requestAnimationFrame(resolve))
}

export default {
  data () {
    return {
      width: 0,
      height: 0,
      widthInput: 8,
      heightInput: 8,
      mode: "1",
      path: [],
      clickPoints: [],
      current: null,
      isExitSolve: false,
      skipCount: 5000,
      generatSpeed: 1,
      cellSize: 50
    }
  },
  computed: {
    begin () {
      let { clickPoints } = this
      if (clickPoints.length >= 2) {
        return clickPoints[clickPoints.length - 2]
      } else if (clickPoints.length === 1) {
        return clickPoints[0]
      } else {
        return null
      }
    },
    end () {
      let { clickPoints } = this
      if (clickPoints.length >= 2) {
        return clickPoints[clickPoints.length - 1]
      } else {
        return null
      }
    }
  },
  methods: {
    onFile ({ target }) {
      let vm = this
      let { files } = target
      if (files.length) {
        let url = URL.createObjectURL(files[0])
        vm.loadImage(url)
      }
    },
    loadImage (url) {
      let vm = this
      vm.clickPoints = []
      let image = new Image()
      image.src = url

      image.onload = () => {
        let { canvas, canvasChecked, canvasPath } = vm.$refs
        let width = canvas.width = vm.width = image.width
        let height = canvas.height = vm.height = image.height
        canvasPath.width = canvasChecked.width = width
        canvasPath.height = canvasChecked.height = height

        let ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0, width, height)

        URL.revokeObjectURL(url)
      }
    },
    async generatMaze1 () {
      let vm = this
      let { widthInput, heightInput, cellSize } = this
      let { canvas, canvasChecked, canvasPath } = this.$refs
      let generator = new MazeGanerator(widthInput, heightInput, cellSize)
      generator.build()
      generator.renderCanvas(canvas)

      this.width = widthInput * generator.cellSize
      this.height = heightInput * generator.cellSize
      this.clickPoints = []
      canvasChecked.getContext('2d').clearRect(0, 0, canvasChecked.width, canvasChecked.height)
      canvasPath.getContext('2d').clearRect(0, 0, canvasPath.width, canvasPath.height)

      let count = 0
      await generator.breakWall(async (current) => {
        count++
        if (count % vm.generatSpeed === 0) {
          generator.renderCanvas(canvas, current)
          return waitFrame()
        }
      })

      generator.renderCanvas(canvas)
    },
    async generatMaze2 () {
      let vm = this
      let { widthInput, heightInput, cellSize } = this
      let { canvas, canvasChecked, canvasPath } = this.$refs
      let generator = new MazeGanerator(widthInput, heightInput, cellSize)

      this.width = widthInput * generator.cellSize
      this.height = heightInput * generator.cellSize
      this.clickPoints = []
      canvasChecked.getContext('2d').clearRect(0, 0, canvasChecked.width, canvasChecked.height)
      canvasPath.getContext('2d').clearRect(0, 0, canvasPath.width, canvasPath.height)

      let count = 0
      await generator.createWall(async () => {
        count++
        if (count % vm.generatSpeed === 0) {
          generator.renderAreasCanvas(canvas)
          return waitFrame()
        }
      })

      generator.renderAreasCanvas(canvas)
    },
    onClickMaze ($event) {
      let { clickPoints } = this
      clickPoints.push([$event.offsetX, $event.offsetY])
      if (clickPoints.length >= 2) {
        this.reload()
      }
    },
    indexToPos (i) {
      let y = i % this.width
      let x = Math.floor(i / this.width)
      return { x, y }
    },
    cellStyle (i) {
      let { x, y } = this.indexToPos(i)
      return { left: `${y * 1.25}em`, top: `${x * 1.25}em` }
    },
    async reload () {
      let vm = this
      let { width, height } = vm
      let { canvas, canvasChecked, canvasPath } = vm.$refs

      canvasPath.width = canvasChecked.width = width
      canvasPath.height = canvasChecked.height = height

      let ctx = canvas.getContext('2d')
      let imgData = ctx.getImageData(0, 0, width, height)
      let m = new Uint32Array(imgData.data.buffer)

      let ctxChecked = canvasChecked.getContext('2d')
      ctxChecked.clearRect(0, 0, width, height)

      this.isExitSolve = true
      await waitFrame()
      this.isExitSolve = false

      let count = 0

      await solveMaze(m, width, height, vm.begin, vm.end, vm.mode, async (nodeGraph, current, path, done) => {
        ctxChecked.fillStyle = "#74b9ff"
        ctxChecked.fillRect(current.x, current.y, 1, 1)

        count++
        if (count > vm.skipCount || done) {
          let ctxPath = canvasPath.getContext('2d')
          ctxPath.clearRect(0, 0, canvasPath.width, canvasPath.height)
          ctxPath.fillStyle = '#FF0000'
          for (let node of path) {
            ctxPath.fillRect(node.x, node.y, 1, 1)
          }
          await waitFrame()
          count = 0
        }

        return vm.isExitSolve
      })
    }
  },
  async created () {
    // this.loadImage(defaultMazeImg)
  }
}
</script>

<style>
.maze-view {
  position: relative;
  min-height: 300px;
  background-color: #f8f9fa;
}
.maze-view canvas {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
