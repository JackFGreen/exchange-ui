import '../../scss/components/ExBtn.scss'
import { inheritExLoading } from '../../tools/inheritEx'

export default {
  name: 'ex-btn',
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click (e) {
      if (this.loading) return
      this.$emit('click', e)
    }
  },
  render (h) {
    const tag = this.tag
    const data = {
      class: 'ex-btn',
      on: {
        click: this.click
      }
    }
    if (this.text) data.class += ' ex-btn-text'
    if (this.border) data.class += ' ex-btn-border'
    if (this.disabled) data.class += ' ex-btn--disabled'

    const btnCont = this.$slots.default || '确定'

    const children = [
      this.loading ? this.$slots.loader || inheritExLoading.call(this, h) : btnCont
    ]
    return h(tag, data, children)
  }
}
