import '../../scss/components/ExQrcode.scss'

import QRCode from 'qrcode'

export default {
  name: 'SQrcode',
  props: {
    link: {
      type: String
    },
    options: {
      type: Object
    }
  },
  data () {
    return {
      opt: {
        margin: 1.4,
        width: 120
      }
    }
  },
  mounted () {
    const canvas = this.$refs.canvas
    QRCode.toCanvas(canvas, this.link, this.options || this.opt)
  },
  render (h) {
    const data = {
      class: 'ex-qrcode'
    }
    const children = [
      h('canvas', {
        class: 'qrcode',
        ref: 'canvas'
      })
    ]
    return h('div', data, children)
  }
}
