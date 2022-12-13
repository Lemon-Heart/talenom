<template lang="pug">
.item(:id="`info-item-${item.id}`")
  .item__body
    h3.item__title {{ item.title }}
    .item__description(v-html="item.description")
    ui-link(v-if="item.link" :href="item.to") {{ item.link }}
  img.item__img(:src="item.img")
</template>

<script>
export default {
  props: {
    item: Object
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.item
  display: flex
  align-items: center
  justify-content: space-between
  gap: 12*$u
  &:not(:last-child)
    margin-bottom: 32.5*$u
    @media screen and (max-width: $padWidth)
      margin-bottom: 25*$u
  @media screen and (max-width: $padWidth)
    flex-direction: column-reverse!important
    margin-bottom: 20*$u
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
    // max-width: 138*$u
    width: 50%
    @media screen and (max-width: $padWidth)
      width: 100%
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
