import '../../scss/components/ExClose.scss'

export default {
  name: 'ex-close',
  render (h) {
    const data = {
      class: 'ex-close',
      on: this.$listeners
    }
    return h('div', data)
  }
}
