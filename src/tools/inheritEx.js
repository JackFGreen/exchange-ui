import ExLoading from '../components/ExLoading'

export function inheritExLoading (h) {
  return h(ExLoading, { props: this.$attrs }, this.$slots.loaderCont)
}
