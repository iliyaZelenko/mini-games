import { urlBasePath } from '~root/config'

window.$router = {
  push (path) {
    location.href = urlBasePath + '#' + path
    location.reload()
  }
}

const routes = {
  '/': () => import(/* webpackChunkName: "snake-game" */ './snake'),
  '/reaction': () => import(/* webpackChunkName: "reaction-game" */ './reaction')
}
const pagePath = location.hash.slice(1) // location.pathname

if (pagePath === '') {
  window.$router.push('/')
} else {
  const matchedRoute = routes[pagePath]
  const routerViewEl = document.querySelector('#router-view')

  if (matchedRoute) {
    matchedRoute().then(({ default: html, script }) => {
      routerViewEl.innerHTML = html
      script()
    })
  } else {
    alert('404')
  }
}

