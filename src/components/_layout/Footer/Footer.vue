<template lang="pug">
.cont
  .footerComponent
    .top
      .top__logo
        ui-svg-icon.logo(
          name="logo"
          :width="isDesktop ? 326 : 200"
          :height="isDesktop ? 49 : 30"
        )
        .soc(v-if="soc && soc.length")
          a(
            v-for="(link, i) in soc"
            :key="i"
            target="blank"
            :href="link.to"
          )
            ui-svg-icon(:name="link.icon")
      .top__menu
        router-link(
          v-for="(link, i) in menu"
          :key="i"
          :to="{ name: link.to }"
        ) {{ link.title }}
      .top__downloads
        a(target="blank")
          ui-svg-icon(
            name="android"
            :width="128"
            :height="37"
          )
        a(target="blank")
          ui-svg-icon(
            name="apple"
            :width="128"
            :height="37"
          )
    .bottom
      .bottom__copy © 2022 Talenom. All rights reserved.
      .bottom__menu
        router-link(:to="{ name: 'Test' }") Privacy
        router-link(:to="{ name: 'Test' }") Cookies
      ui-language-select.bottom__select
</template>

<script>
import { reactive } from 'vue'

export default {
  components: { },
  props: {
    isDesktop: Boolean
  },
  setup () {
    const menu = reactive([
      { to: 'Test', title: 'Talenom One' },
      { to: 'Test', title: 'Accounting' },
      { to: 'Test', title: 'Invoicing' },
      { to: 'Test', title: 'Talenom Pro' },
      { to: 'Test', title: 'International Mobility Services' },
      { to: 'Test', title: 'Payroll services' },
      { to: 'Test', title: 'Investors' },
      { to: 'Test', title: 'Banking' },
      { to: 'Test', title: 'Blog' },
      { to: 'Test', title: 'Careers' },
      { to: 'Test', title: 'Integrations' }
    ])
    const soc = reactive([
      { to: 'https://www.whatsapp.com', icon: 'wa' },
      { to: '', icon: 'in' },
      { to: '', icon: 'fb' },
      { to: '', icon: 'tw' },
      { to: 'https://www.youtube.com', icon: 'yt' }
    ])
    return { menu, soc }
  }
}
</script>

<style lang="sass" scoped>
.footerComponent
  display: flex
  flex-direction: column
  .top
    display: flex
    padding-bottom: 10*$u
    @media screen and (max-width: $mobileWidth)
      padding-bottom: 8.5*$u
    @media screen and (max-width: $padWidth)
      flex-direction: column
      align-items: center
    &__logo
      display: flex
      flex-direction: column
      margin-right: 27*$u
      @media screen and (max-width: $XLWidth)
        margin-right: 10*$u
      @media screen and (max-width: $padWidth)
        margin-right: 0
      .soc
        margin-top: 10.5*$u
        display: flex
        align-items: center
        @media screen and (max-width: $padWidth)
          margin-top: 7.5*$u
        > *
          flex-shrink: 0
          &:not(:last-child)
            margin-right: 8*$u
            @media screen and (max-width: $XLWidth)
              margin-right: 5*$u
    &__menu
      margin-right: 10*$u
      @include font(t20-semibold)
      display: grid
      grid-template-columns: repeat(3, minmax(#{20*$u}, #{40*$u}))
      justify-content: flex-start
      gap: 6*$u 10*$u
      @media screen and (max-width: $XLWidth)
        gap: 6*$u
        margin-right: 5*$u
      @media screen and (max-width: $LWidth)
        grid-template-columns: repeat(2, minmax(#{20*$u}, #{40*$u}))
        gap: 6*$u 10*$u
      @media screen and (max-width: $padWidth)
        justify-content: center
        margin: 8.5*$u 0
      @media screen and (max-width: $SWidth)
        gap: 6*$u
    &__downloads
      display: flex
      flex-direction: column
      margin-left: auto
      @media screen and (max-width: $padWidth)
        margin: 0
        flex-direction: row
      > *:not(:last-child)
        margin-bottom: 6*$u
        @media screen and (max-width: $padWidth)
          margin-bottom: 0
          margin-right: 3.5*$u
  .bottom
    padding: 7.5*$u 0
    border-bottom: 1px solid $borderFooter
    border-top: 1px solid $borderFooter
    display: flex
    align-items: center
    @include font(t16-regular)
    @media screen and (max-width: $padWidth)
      padding: 6.25*$u 0 5*$u
      flex-direction: column
      align-items: center
    &__copy
      margin-right: 7.5*$u
      white-space: nowrap
      @media screen and (max-width: $padWidth)
        margin: 0 0 3*$u 0
    &__menu
      margin-right: 7.5*$u
      display: flex
      @media screen and (max-width: $padWidth)
        margin: 0
      > *:not(:last-child)
        margin-right: 7.5*$u
    &__select
      margin-left: auto
      @media screen and (max-width: $padWidth)
        margin-right: auto
        margin-bottom: 6*$u
        order: -1
      @media screen and (max-width: $mobileWidth)
        width: 100%!important
</style>
