console.log(location.pathname)

if (location.pathname === '/') {
  import('./snake/index.html').then(html => {
    document.body.innerHTML = html.default

    require('./snake')
  })
}
