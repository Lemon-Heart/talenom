<template lang="pug">
section.section
  .cont
    .heading
      h1 Unbeatable accounting and banking services
      .heading__description Financial software and services for passioned entrepreneurs
    .links
      main-link(
        v-for="link in links"
        :key="link.id"
        :link="link"
      )
</template>

<script>
import { reactive } from 'vue'
import MainLink from './MainLink/MainLink'

export default {
  components: { MainLink },
  props: {
    isDesktop: Boolean
  },
  setup () {
    const links = reactive([
      {
        id: 1,
        name: 'Talenom',
        description: 'Financial software for your business',
        button: 'Download now',
        link: ''
      },
      {
        id: 2,
        name: 'Talenom One',
        description: 'Software, banking and accounting for small organizations',
        button: 'Find out more',
        link: ''
      },
      {
        id: 3,
        name: 'Talenom Pro',
        description: 'Comprehensive solution with high quality advisory services',
        button: 'Meet our expert',
        link: '',
        yellow: true
      }
    ])

    return { links }
  }
}
</script>

<style lang="sass" scoped>
.section
  position: relative
  padding: 23*$u 0 15*$u
  z-index: 0
  &:before
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    height: 130*$u
    z-index: -1
    background-image: url('/public/img/bg-lines/line-large.png')
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    @media screen and (max-width: $XLWidth)
      background-image: url('/public/img/bg-lines/line.png')
      height: 120*$u
    @media screen and (max-width: $padWidth)
      height: 100*$u
    @media screen and (max-width: $SWidth)
      height: 50*$u
      background-size: 100%
      background-image: url('/public/img/bg-lines/line-mobile.png')
  @media screen and (max-width: $LWidth)
    padding-top: 12*$u
  @media screen and (max-width: $mobileWidth)
    padding: 7.5*$u 0 12.5*$u
  .heading
    text-align: center
    max-width: 205*$u
    margin: auto
    h1
      @media screen and (max-width: $MWidth)
        padding: 0 10*$u
    &__description
      font-family: NunitoSemiBold
      text-align: center
      margin: auto
      font-size: 7.5*$u
      line-height: 8*$u
      margin-top: 7.5*$u
      @media screen and (max-width: $padWidth)
        font-size: 5.5*$u
        line-height: 7*$u
  .links
    margin-top: 17.5*$u
    display: flex
    justify-content: space-evenly
    @media screen and (max-width: $padWidth)
      margin-top: 9*$u
      flex-direction: column
</style>
