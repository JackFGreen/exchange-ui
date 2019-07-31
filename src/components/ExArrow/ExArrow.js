import '../../scss/components/ExArrow.scss'

export default {
  name: 'ex-arrow',
  props: {
    rotate: {
      type: String
    },
    size: {
      type: String
    },
    color: {
      type: String
    },
    thick: {
      type: String
    }
  },
  render (h) {
    const data = {
      class: 'ex-arrow',
      style: {}
    }

    if (this.size) {
      data.style.width = this.size
      data.style.height = this.size
    }
    if (this.color) {
      data.style.borderColor = this.color
    }
    if (this.thick) {
      data.style.borderRightWidth = this.thick
      data.style.borderTopWidth = this.thick
    }
    if (this.rotate) {
      data.style.transform = `rotate(${this.rotate})`
    }

    return h('i', data)
  }
}
