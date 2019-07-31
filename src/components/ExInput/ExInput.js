import '../../scss/components/ExInput.scss'

export default {
  name: 'ex-input',
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    }
  },
  computed: {
    inputListeners () {
      var vm = this
      return Object.assign({}, this.$listeners, {
        input (event) {
          vm.$emit('input', event.target.value)
        }
      })
    }
  },
  render (h) {
    const data = {
      class: 'ex-input'
    }

    const inputData = {
      class: 'ex-input__el',
      domProps: {
        disabled: this.disabled,
        value: this.value
      },
      props: this.$attrs,
      on: this.inputListeners
    }

    const children = [h('input', inputData)]
    return h('div', data, children)
  }
}
