import '../../scss/components/ExContainer.scss'

import { inheritExLoading } from '../../tools/inheritEx'
import ExMask from '../ExMask'

export default {
  name: 'ex-container',
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingBlock: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
    const data = {
      class: 'ex-container'
    }

    if (this.mask) data.class += ' ex-container-mask'
    if (this.empty) data.class += ' ex-container-empty'

    const loadEl = inheritExLoading.call(this, h)

    const loadBlockEl = this.loadingBlock
      ? h(
        'div',
        {
          class: 'ex-container__block'
        },
        [loadEl]
      )
      : loadEl

    const children = [this.loading ? loadBlockEl : this.$slots.default]

    if (this.mask && this.loading) children.push(h(ExMask))

    return h('div', data, this.empty ? this.$slots.empty || 'empty' : children)
  }
}
