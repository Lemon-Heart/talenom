<template lang="pug">
.accordion(ref="item")
  .accordion__header(@click="toggle")
    span {{ title }}
    .accordion__icon
      span
      span
  .accordion__body(ref="body")
    .accordion__content
      span {{ text }}
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  setup () {
    const item = ref()
    const body = ref()

    const toggle = () => {
      item.value.classList.toggle('show')
      body.value.style.transitionDuration = body.value.scrollHeight < 100 ? body.value.scrollHeight / 200 + 's' : body.value.scrollHeight < 500 ? body.value.scrollHeight / 500 + 's' : body.value.scrollHeight / 2500 + 's'
      if (body.value.style.height) (body.value.style.height = null)
      else (body.value.style.height = body.value.scrollHeight + 'px')
    }
    return { toggle, item, body }
  }
}
</script>

<style lang="sass">
.accordion
  overflow: hidden
  &.show
    .accordion__icon
      transform: rotate(315deg)
  &__header
    display: flex
    justify-content: space-between
    cursor: pointer
    font-size: 7*$u
    line-height: 9*$u
    transition: .3s
    @media screen and (max-width: $MWidth)
      font-size: 4.5*$u
      line-height: 7*$u
    &:hover
      color: $electricViolet
      .accordion__icon span
        background: $electricViolet
  &__icon
    width: 10*$u
    height: 10*$u
    position: relative
    flex-shrink: 0
    margin-left: 10*$u
    transition: .5s
    @media screen and (max-width: $MWidth)
      width: 5*$u
      height: 5*$u
    span
      position: absolute
      top: 50%
      width: 100%
      height: .5*$u
      background: $mirage
      transition: .3s
      transform: translateY(-50%)
      @media screen and (max-width: $MWidth)
        height: .25*$u
      &:last-child
        transform: rotate(90deg)
  &__body
    height: 0
  &__content
    margin-top: 3*$u
    display: flex
    flex-direction: column
    font-size: 5.5*$u
    line-height: 7.5*$u
    @media screen and (max-width: $MWidth)
      font-size: 3.5*$u
      line-height: 5*$u
</style>
