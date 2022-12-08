<template lang="pug">
.advantage
  .advantage__body
    h3.advantage__title {{ advantage.title }}
    .advantage__description {{ advantage.description }}
    a.advantage__link(:href="advantage.to")
      span {{ advantage.linkTitle }}
      ui-svg-icon(
        name="link"
        :width="20"
        :height="20"
      )
  img.advantage__img(:src="`img/advantage/${advantage.id}.png`")
</template>

<script>
export default {
  components: { },
  props: {
    advantage: Object
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.advantage
  display: flex
  align-items: center
  justify-content: space-between
  gap: 5*$u
  @media screen and (max-width: $padWidth)
    flex-direction: column-reverse!important
    margin-bottom: 20*$u
  &:nth-child(2n)
    flex-direction: row-reverse
  &:last-child
    margin-bottom: 0
    .advantage__img
      @media screen and (max-width: $XXLWidth)
        width: 50%
      @media screen and (max-width: $padWidth)
        width: 100%
  &__body
    display: flex
    flex-direction: column
    max-width: 138*$u
  &__title
  &__description
    font-size: 6*$u
    line-height: 9.5*$u
    margin: 5*$u 0
    @media screen and (max-width: $XLWidth)
      font-size: 4.5*$u
      line-height: 7*$u
      margin-bottom: 4*$u
  &__link
    cursor: pointer
    color: $royalBlue
    display: flex
    font-size: 6*$u
    line-height: 9.5*$u
    font-family: NunitoBold
    align-items: center
    transition: .2s
    &:hover
      color: $cornflower
      &:deep
        path
          fill: $cornflower
    @media screen and (max-width: $XLWidth)
      font-size: 4.5*$u
      line-height: 6*$u
    span
      margin-right: 4*$u
      @media screen and (max-width: $SWidth)
        margin-right: 2*$u
    &:deep
      path
        transition: .2s
        fill: $royalBlue
  &__img
    @media screen and (max-width: $XLWidth)
      width: 40%
    @media screen and (max-width: $padWidth)
      width: 50%
    @media screen and (max-width: $MWidth)
      width: 60%
    @media screen and (max-width: $SWidth)
      width: 70%
</style>
