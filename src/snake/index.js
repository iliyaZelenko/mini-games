// (function () {
const c = document.querySelector('canvas')
const ctx = c.getContext('2d')

const ceil = 16
const fieldCeilsCount = 40
const fieldW = ceil * fieldCeilsCount
const fieldH = ceil * fieldCeilsCount

c.width = fieldW
c.height = fieldH

const snakeStartX = (fieldCeilsCount / 2) * ceil
const snakeStartY = (fieldCeilsCount / 2) * ceil
let snakeX = snakeStartX
let snakeY = snakeStartY
let currentDir = 'top'
let worldIntervalFrequency = 100
let worldInterval = null
let worldIntervalIterations = 0
// первый элемент - это конец хвоста, последний - начало змеи
const savedPositions = [{
  x: snakeX,
  y: snakeY + ceil * 2
}, {
  x: snakeX,
  y: snakeY + ceil
}, {
  x: snakeX,
  y: snakeY
}]
let bonusesPositions = []

start()

// ctx.fillRect(20, 20, 50, 100)

document.body.addEventListener('keydown', ({ key }) => {
  const dirByKey = {
    w: 'top',
    d: 'right',
    s: 'bottom',
    a: 'left'
  }

  if (dirByKey[key]) {
    const oldDir = currentDir
    const wantMoveDir = dirByKey[key]

    // если хочет двигаться (wantMoveDir) в противоположном направлении текущего направления (oldDir)
    if (getDirOpposite(wantMoveDir) === oldDir) {
      return
    }
    currentDir = wantMoveDir
    // worldCycleAndRefresh()
  }
})
document.querySelector('.menu__btn-pause').addEventListener('click', pause)

function worldCycle () {
  // draw()
  worldIntervalIterations++

  // console.log(worldIntervalIterations)
  if (worldIntervalIterations % 5 === 0) {
    addBonus()
  }

  move(currentDir)
  draw()

  // === snakeX
  const takeBonus = bonusesPositions.find(i =>
    savedPositions.some(k => k.x === i.x && k.y === i.y)
  )
  if (takeBonus) {
    bonusesPositions = bonusesPositions.filter(i => i !== takeBonus)

    // TODO (хотя уже работает) может с getDirOpposite() попробовать
    const dir = savedPositions[0].dir
    savedPositions.unshift({
      dir: dir,
      ...savedPositions[0]
      // ...changePosByDir(dir, savedPositions[0])
    })
    draw()
  }

  const taran = savedPositions.slice(0, -1).find(i => i.x === snakeX && i.y === snakeY)
  if (taran) {
    alert('Game over')
  }
}
function clear () {
  ctx.clearRect(0, 0, fieldW, fieldH)
}
function move (dir) {
  // let dirOpposite
  let posBeforeMove = {
    x: snakeX,
    y: snakeY
  }
  let posAfterMove = changePosByDir(dir, posBeforeMove)

  snakeX = posAfterMove.x
  snakeY = posAfterMove.y

  savedPositions.shift()
  savedPositions.push({
    ...posAfterMove,
    // prevCeil,
    // dirOpposite,
    dir: dir
    // x: snakeX,
    // y: snakeY
  })
}
function draw () {
  clear()

  for (let { x, y } of savedPositions) {
    ctx.beginPath()
    ctx.fillStyle = 'green'
    ctx.fillRect(x, y, ceil, ceil)
    ctx.fill()
    ctx.stroke()
  }
  for (let { x, y } of bonusesPositions) {
    const radius = 5

    ctx.beginPath()
    ctx.fillStyle = '#FF0000'
    ctx.arc(x + ceil / 2, y + ceil / 2, radius, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
  }

  // ctx.fillStyle = null
}
// function worldCycleAndRefresh () {
//   worldCycle()
//   reAssignInterval()
// }
// function reAssignInterval () {
//   clearInterval(worldInterval)
//   worldInterval = getInterval()
// }
function getInterval () {
  worldIntervalIterations++

  return setInterval(worldCycle, worldIntervalFrequency)
}
function start () {
  worldCycle()
  worldInterval = getInterval()
}
function pause () {
  clearInterval(worldInterval)
}
function addBonus () {
  bonusesPositions.push({
    x: getRandomCeil(),
    y: getRandomCeil()
  })
}
function getRandomCeil () {
  return Math.floor(Math.random() * fieldCeilsCount) * ceil
}
function changePosByDir (dir, pos) {
  switch (dir) {
    case 'top':
      pos.y -= ceil
      break
    case 'right':
      pos.x += ceil
      break
    case 'bottom':
      pos.y += ceil
      break
    case 'left':
      pos.x -= ceil
      break
  }

  return pos
}
function getDirOpposite (dir) {
  switch (dir) {
    case 'top':
      return 'bottom'
    case 'right':
      return 'left'
    case 'bottom':
      return 'top'
    case 'left':
      return 'right'
  }
}
// })()
