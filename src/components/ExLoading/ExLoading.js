import '../../scss/components/ExLoading.scss'

export default {
  name: 'ex-loading',
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
    let className = 'ex-loading'
    if (this.column) className += ' ex-loading-column'

    const data = {
      class: className
    }

    const loadSpinner = h(
      'div',
      {
        class: 'load-spinner'
      },
      [
        h('div'),
        h('div'),
        h('div'),
        h('div'),
        h('div'),
        h('div'),
        h('div'),
        h('div'),
        h('div'),
        h('div'),
        h('div'),
        h('div')
      ]
    )

    const cont = this.$slots.default || '加载中...'
    const loadCont = h(
      'div',
      {
        class: 'loat-cont'
      },
      cont
    )

    const children = [loadSpinner, loadCont]
    return h('div', data, children)
  }
}
