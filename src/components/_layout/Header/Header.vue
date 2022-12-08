<template lang="pug">
.cont
  .headerComponent
    router-link(:to="{ name: 'Home' }")
      ui-svg-icon.logo(
        name="logo"
        :width="isDesktop ? 177 : 135"
        :height="isDesktop ? 26 : 20"
      )
    .menu(:class="{'dropdowmMenu': !isDesktop, 'open': dropdownMenu.isOpen}")
      router-link.link(
        v-for="(link, i) in menu"
        :key="i"
        :to="{ name: link.to }"
      ) {{ link.title }}
      .right
        ui-language-select(header)
        .login {{ loginText }}
    ui-burger-menu-icon(v-if="!isDesktop")
</template>

<script>
import { inject, computed, reactive } from 'vue'

export default {
  components: { },
  props: {
    isDesktop: Boolean
  },
  setup () {
    const store = inject('store')
    const language = computed(() => store.language.languageId)
    const dropdownMenu = computed(() => store.dropdownMenu)

    const menu = reactive([
      { to: 'Test', title: 'Talenom One' },
      { to: 'Test', title: 'Talenom Pro' },
      { to: 'Test', title: 'Talenom Software' },
      { to: 'Test', title: 'Who we are' }
    ])

    const loginText = computed(() => {
      switch (language.value) {
        case 2:
          return 'Kirjaudu sisään'
        case 3:
          return 'Logga in'
        default:
          return 'Login'
      }
    })

    return { language, menu, dropdownMenu, loginText }
  }
}
</script>

<style lang="sass" scoped>
.headerComponent
  display: flex
  align-items: center
  font-family: NunitoSemiBold
  font-size: 4.5*$u
  line-height: 5*$u
  position: relative
  @media screen and (max-width: $LWidth)
    justify-content: space-between
  .logo
    flex-shrink: 0
    &:deep
      path
        fill: $mirage
  .menu
    width: 100%
    display: flex
    margin-left: 22.5*$u
    @media screen and (max-width: $XLWidth)
      margin-left: 10*$u
    &.dropdowmMenu
      background: $white
      margin-left: 0
      position: absolute
      flex-direction: column
      max-height: 0
      overflow: hidden
      bottom: 0
      right: -10*$u
      left: -10*$u
      transform: translateY(calc(100% + #{2*$u}))
      // max-width: 94*$u
      padding: 0 5*$u
      transition: .2s
      z-index: 100
      width: 100vw
      height: 100vh
      &.open
        // max-height: 100*$u
        max-height: 100vh
        padding: 12.5*$u 5*$u
      .right
        border-top: 1px solid $mirage
        padding-top: 10*$u
        margin-left: 0
        flex-direction: column
        > *
          width: fit-content
      .login
        margin-left: 0
        margin-top: 7.5*$u
      .link
        margin-left: 0
        margin-bottom: 7.5*$u
        &:last-child
          margin-bottom: 10*$u
      &:deep
        .uiLanguageSelect__wrapper
          margin-top: 0
    .link
      margin-right: 7.5*$u
      opacity: .5
      white-space: nowrap
      transition: .2s
      &:hover
        opacity: 1
      @media screen and (max-width: $XLWidth)
        margin-right: 5*$u
      &.router-link-active, .router-link-exact-active
        opacity: 1
  .right
    display: flex
    margin-left: auto
  .login
    display: flex
    align-items: center
    margin-left: 10*$u
    @media screen and (max-width: $XLWidth)
      margin-left: 5*$u
    > *:last-child
      margin-left: 1.75*$u
</style>
