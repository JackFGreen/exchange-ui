import '../../scss/components/ExModal.scss'

import ExMask from '../ExMask'
import ExClose from '../ExClose'

export default {
  name: 'ex-modal',
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean
    },
    close: {
      type: Boolean
    }
  },
  methods: {
    hide () {
      this.$emit('input', false)
      this.$emit('close')
    }
  },
  render (h) {
    const data = {
      class: 'ex-modal'
    }

    const head = h(
      'div',
      {
        class: 'ex-modal__head'
      },
      this.$slots.head
    )

    const cont = h(
      'div',
      {
        class: 'ex-modal__cont'
      },
      this.$slots.cont
    )

    const foot = h(
      'div',
      {
        class: 'ex-modal__foot'
      },
      this.$slots.foot
    )

    const main = [head, cont, foot]

    const modalCont = [this.$slots.default || main]

    const modalClose = h(ExClose, {
      on: {
        click: this.hide
      }
    })

    if (this.close) modalCont.push(modalClose)

    const modal = h(
      'div',
      {
        class: 'ex-modal__cont'
      },
      modalCont
    )

    const children = [h(ExMask), modal]

    return this.value && h('div', data, children)
  }
}
