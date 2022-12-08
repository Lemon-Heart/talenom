<template lang="pug">
section.section
  .cont
    .heading
      h2 Why companies choose Talenom
  .list
    .list__item(
      v-for="(item, i) in list"
      :key="i"
    )
      .cont
        h3.list__name {{ item.name }}
        .list__description {{ item.description }}
</template>

<script>
import { reactive } from 'vue'

export default {
  components: { },
  setup () {
    const list = reactive([
      {
        name: 'A True partner',
        description: 'With Talenom you have a dedicated expert focused on the finances of your business. Beyond managing your books and taxes, we take care of your payroll, offer financial best practices, and much more. We’ve got your back.'
      },
      {
        name: 'Fast and exact',
        description: 'Accurate balances, delivered on time. Our consultants are backed by our own powerful bookkeeping software that eliminates common errors and automates routines with incredible efficiency. Once your consultant has collected initial details the process is fast, reliable and accurate.'
      },
      {
        name: 'More than just accounting',
        description: 'Talenom offers your business an all-in-one accounting, tax, advisory and banking solution that grows with your business.  Everything organized for you, every step of the way.'
      },
      {
        name: 'From a great idea to dynamic growth —we are with you every step of the way',
        description: 'Our accounting, tax, payroll, invoicing and banking services have got you covered. No matter what stage your company is at. From fundraising to SaaS models, you’ll get the financial knowledge and support you need and the numbers that matter.'
      }
    ])
    return { list }
  }
}
</script>

<style lang="sass" scoped>
.section
  margin: 15*$u 0
  @media screen and (max-width: $mobileWidth)
    margin: 12.5*$u 0
  .heading
    max-width: 134*$u
  .list
    background: $white
    margin-top: 12.5*$u
    display: flex
    flex-direction: column
    &__item
      padding: 10*$u 0
      height: 82.5*$u
      transition: .2s
      @media screen and (max-width: $LWidth)
        padding: 5*$u 0 7.5*$u
      @media screen and (max-width: $SWidth)
        height: auto
      &:hover
        background: $coral
        color: $white
      > .cont
        display: flex
        @media screen and (max-width: $SWidth)
          flex-direction: column
    &__description
      font-size: 6*$u
      line-height: 9.5*$u
      margin-left: 22.5*$u
      @media screen and (max-width: $padWidth)
        font-size: 4.5*$u
        line-height: 7*$u
      @media screen and (max-width: $XLWidth)
        margin-left: 10*$u
      @media screen and (max-width: $LWidth)
        margin-left: 5*$u
      @media screen and (max-width: $SWidth)
        margin: 4*$u 0 0 0
    &__name
      width: 116*$u
      flex-shrink: 0
      @media screen and (max-width: $LWidth)
        width: 90*$u
      @media screen and (max-width: $padWidth)
        width: 70*$u
      @media screen and (max-width: $SWidth)
        width: 100%
</style>
