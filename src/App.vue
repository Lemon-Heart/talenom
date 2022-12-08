<template lang="pug">
.header
  app-header(:is-desktop="isDesktop")
router-view
.footer
  app-footer(:is-desktop="isDesktop")
app-modal
</template>

<script>
import AppHeader from '@/components/_layout/Header/Header'
import AppFooter from '@/components/_layout/Footer/Footer'
import AppModal from '@/components/_layout/Modal/Modal'
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  components: { AppHeader, AppModal, AppFooter },
  setup () {
    const WW = ref()
    const setWW = () => (WW.value = window.innerWidth)
    onMounted(() => {
      WW.value = window.innerWidth
      window.addEventListener('resize', setWW)
    })
    onUnmounted(() => window.removeEventListener('resize', setWW))
    const isDesktop = computed(() => {
      if (WW.value > 1030) return true
      else return false
    })

    return { isDesktop }
  }
}
</script>

<style lang="sass">
#app
  display: flex
  flex-direction: column
  min-height: 100vh
  overflow-x: hidden
.header
  background: $white
  padding: 8*$u 0
  @media screen and (max-width: $mobileWidth)
    padding: 6.25*$u 0
.footer
  margin-top: auto
  padding: 19*$u 0 14*$u
  background: $mirage
  color: $white
  @media screen and (max-width: $mobileWidth)
    padding: 8.75*$u 0 7.5*$u
</style>
