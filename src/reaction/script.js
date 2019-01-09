let timeStart
let results = []
let timeout
const clases = {
  wait: 'click-container--wait',
  getReady: 'click-container--get-ready',
  click: 'click-container--click'
}

export default () => {
  const containerEl = document.querySelector('.click-container')
  const textEl = document.querySelector('.click-container__text')

  containerEl.addEventListener('click', function () {
    if (this.classList.contains(clases.wait)) {
      this.classList.remove(clases.wait)
      this.classList.add(clases.getReady)
      textEl.textContent = 'Приготовьтесь...'

      timeout = setTimeout(() => {
        this.classList.remove(clases.getReady)
        this.classList.add(clases.click)
        textEl.textContent = 'Нажмите!'

        timeStart = getNow()
      }, getRandom(700, 3000))
    }

    if (this.classList.contains(clases.click)) {
      const timeEnd = getNow()
      const timeDiffMs = +(timeEnd - timeStart).toFixed(1)

      results.push(timeDiffMs)
      updateResults()

      this.classList.remove(clases.click)
      this.classList.add(clases.wait)
      textEl.textContent = 'Нажмите чтобы начать.'
      // не обязательно
      this.click()
    }
  })
  containerEl.addEventListener('dblclick', function () {
    results = []
    updateResults()

    this.classList.remove(clases.getReady)
    this.classList.remove(clases.click)
    !this.classList.contains(clases.wait) && this.classList.add(clases.wait)

    textEl.textContent = 'Нажмите чтобы начать.'

    clearTimeout(timeout)
  })
}

function getRandom (min, max) {
  return min + Math.round(
    Math.random() * (max - min)
  )
}

function getNow () {
  // new Date()
  return performance.now()
}

function updateResults () {
  const average = +((results.length && results.reduce((pre, curr) => pre + curr) / results.length) || 0).toFixed(1)

  document.querySelector('.result-list__results').textContent = (results.length && results.join(', ')) || '?'
  document.querySelector('.result-list__best-result').textContent = (results.length && Math.min(...results)) || '?'
  document.querySelector('.result-list__worst-result').textContent = (results.length && Math.max(...results)) || '?'
  document.querySelector('.result-list__average-result').textContent = (results.length && average) || '?'
}
