<template lang="pug">
template(v-if="isAuth")
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
import AdminComponent from '@/components/AdminComponent'
import { ref, inject, computed, onMounted, onUnmounted } from 'vue'

export default {
  components: { AppHeader, AppModal, AppFooter },
  setup () {
    // remove in future
    const store = inject('store')
    const isAuth = computed(() => store.modalQueue.isAuth)

    if (!isAuth.value) {
      store.modalQueue.push({
        key: 'AdminComponent',
        component: AdminComponent,
        params: {
          isClosable: false
        }
      })
    }
    // end
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

    return { isDesktop, isAuth }
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
