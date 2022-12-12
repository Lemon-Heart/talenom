<template lang="pug">
.advantage
  .advantage__body
    h3.advantage__title {{ advantage.title }}
    .advantage__description {{ advantage.description }}
  img.advantage__img(:src="advantage.img")
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
  gap: 10*$u
  &:not(:last-child)
    margin-bottom: 130px
  // &:last-child .advantage__body
  //   margin-bottom: 20*$u
  @media screen and (max-width: $padWidth)
    flex-direction: column-reverse!important
    margin-bottom: 20*$u
  &:nth-child(2n - 1)
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
  &__img
    @media screen and (max-width: $XLWidth)
      width: 50%
    @media screen and (max-width: $padWidth)
      width: 60%
    @media screen and (max-width: $MWidth)
      width: 80%
    @media screen and (max-width: $SWidth)
      width: 100%
</style>
