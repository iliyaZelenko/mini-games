const routes = {
  '/': () => import(/* webpackChunkName: "snake-game" */ './snake'),
  '/reaction': () => import(/* webpackChunkName: "reaction-game" */ './reaction')
}
const matchedRoute = routes[location.pathname]
const routerViewEl = document.querySelector('#router-view')

if (matchedRoute) {
  matchedRoute().then(({ default: html, script }) => {
    routerViewEl.innerHTML = html
    script()
  })
} else {
  alert('404')
}
