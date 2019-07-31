import * as components from './components'

const install = function (Vue) {
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })
}

export default {
  install
}
export * from './components'
