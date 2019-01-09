// (function () {
export default () => {
  const c = document.querySelector('canvas')
  const ctx = c.getContext('2d')

  const ceil = 8
  const fieldCeilsXCount = 80
  const fieldCeilsYCount = 80
  const fieldW = ceil * fieldCeilsXCount
  const fieldH = ceil * fieldCeilsYCount

  c.width = fieldW
  c.height = fieldH

  const snakeStartX = (fieldCeilsXCount / 2) * ceil
  const snakeStartY = (fieldCeilsYCount / 2) * ceil
  const snakeCeilsSize = 2
  const snakeCeilsWidthPx = ceil * snakeCeilsSize
  const snakeCeilsHeightPx = ceil * snakeCeilsSize
  let snakeX = snakeStartX
  let snakeY = snakeStartY
  let currentDir = 'top'
  let worldIntervalFrequency = 60 // 30
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
      ArrowTop: 'top',
      d: 'right',
      ArrowRight: 'right',
      s: 'bottom',
      ArrowBottom: 'bottom',
      a: 'left',
      ArrowLeft: 'left'
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
    moveRegardingWorldBoundaries()
    draw()

    // TODO maybe before draw and delete draw
    checkTakeBonus()
    const taran = savedPositions.slice(0, -1).find(i => i.x === snakeX && i.y === snakeY)
    if (taran) {
      alert('Game over')
    }
  }

  function clear () {
    ctx.clearRect(0, 0, fieldW, fieldH)
  }

  function checkTakeBonus () {
    const takeBonus = bonusesPositions.find(i =>
      savedPositions.some(k =>
        k.x <= i.x && i.x <= k.x + snakeCeilsWidthPx &&
        k.y <= i.y && i.y <= k.y + snakeCeilsHeightPx
      )
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

  // корректирует движение относительно границ мира
  function moveRegardingWorldBoundaries () {
    const head = getSnakeHeadPos()
    let x
    let y

    if (head.x < 0) {
      x = fieldW - ceil
    }
    if (head.x > fieldW) {
      x = 0
    }
    if (head.y < 0) {
      y = fieldH - ceil
    }
    if (head.y > fieldH) {
      y = 0
    }

    setSnakeHeadPos(x, y)
  }

  function setSnakeHeadPos (x, y) {
    const head = getSnakeHeadPos()

    if (x === undefined || x === null) {
      x = head.x
    }
    if (y === undefined || x === null) {
      y = head.y
    }

    head.x = snakeX = x
    head.y = snakeY = y
  }

  function getSnakeHeadPos () {
    return savedPositions[savedPositions.length - 1]
  }

  function draw () {
    clear()

    for (let { x, y } of savedPositions) {
      ctx.beginPath()
      ctx.fillStyle = 'green'
      ctx.fillRect(x, y, snakeCeilsWidthPx, snakeCeilsHeightPx)
      ctx.fill()
      ctx.stroke()
    }
    for (let { x, y } of bonusesPositions) {
      const radius = ceil / 2

      ctx.beginPath()
      ctx.fillStyle = '#FF0000'
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
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
      x: getRandomCeil() + ceil / 2,
      y: getRandomCeil() + ceil / 2
    })
  }

  function getRandomCeil () {
    return Math.floor(Math.random() * fieldCeilsXCount) * ceil
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
}
// })()
