<template lang="pug">
section.section
  .cont
    .heading
      h1 Unbeatable accounting and banking services
      .heading__description More than accounting software. Talenom’s smart tools for smarter decisions
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
        description: 'Software for Starting and Growing your business',
        secondDescription: 'Have you started a business and need a hand with e-invoicing?',
        button: 'Download now',
        link: ''
      },
      {
        id: 2,
        name: 'Talenom One',
        description: 'Packages for teams less than 5 peoples',
        secondDescription: 'Do you spend too much time trying to figure out your books?',
        button: 'Try  for free',
        link: ''
      },
      {
        id: 3,
        name: 'Talenom Pro',
        description: 'Our team is more than 5 people',
        secondDescription: 'Are you looking for a new Accounting and Payroll partner?',
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
      max-width: 149*$u
      @media screen and (max-width: $padWidth)
        font-size: 5.5*$u
        line-height: 7*$u
  .links
    margin-top: 13*$u
    display: flex
    justify-content: center
    @media screen and (max-width: $padWidth)
      flex-direction: column
</style>
