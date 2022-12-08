<template lang="pug">
section.section
  .cont
    .questions
      .heading
        h2 Frequently asked questions
      .list
        .list__item(
          v-for="(item, i) in list"
          :key="i"
        )
          ui-dropdown(
            :title="item.title"
            :text="item.body"
          )
</template>

<script>
import { reactive } from 'vue'

export default {
  components: { },
  setup () {
    const list = reactive([
      {
        title: 'Whats the difference between Talenom One and Talenom Pro?',
        body: 'With Talenom you have a dedicated expert practices, and much more. We’ve got your back.'
      },
      {
        title: 'What should small business owners pay attention to?',
        body: 'Accurate balances, delivered on time. Once your consultant has collected initial details the process is fast, reliable and accurate.'
      },
      {
        title: 'Why outsource the bookkeeping tasks?',
        body: 'Talenom offers your business an all-in-one accounting, tax, advisory and banking solution that grows with your business.'
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
  .questions
    display: flex
    @media screen and (max-width: $LWidth)
      flex-direction: column
  .heading
    width: 34%
    @media screen and (max-width: $LWidth)
      width: 100%
      margin-bottom: 8*$u
  .list
    width: 66%
    padding-left: 27.5*$u
    @media screen and (max-width: $XLWidth)
      padding-left: 20*$u
    @media screen and (max-width: $LWidth)
      padding-left: 0
      width: 100%
    &__item
      padding: 10*$u 0
      border-bottom: .5*$u solid rgb(20, 31, 46, .2)
      @media screen and (max-width: $LWidth)
        padding: 5*$u 0
      @media screen and (max-width: $MWidth)
        padding: 2.75*$u 0
      &:first-child
        padding-top: 0
</style>
