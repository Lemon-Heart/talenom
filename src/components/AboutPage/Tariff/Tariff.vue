<template lang="pug">
.tariff
  .tariff__title {{ tariff.title }}
  .tariff__description {{ tariff.description }}
  a.tariff__link(:href="tariff.link")
    span {{ tariff.linkText }}
    ui-svg-icon(
      name="link"
      :width="20"
      :height="20"
    )
  img.tariff__img(:src="tariff.img")
</template>

<script>
export default {
  components: { },
  props: {
    tariff: Object
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.tariff
  display: flex
  flex-direction: column
  &:not(:last-child)
    border-right: .25*$u solid rgb(20, 31, 46, .1)
    padding-right: 9*$u
    @media screen and (max-width: $LWidth)
      padding-right: 5*$u
    @media screen and (max-width: $padWidth)
      border: none
      padding-right: 0
      margin-bottom: 12.5*$u
  &:not(:first-child)
    border-left: .25*$u solid rgb(20, 31, 46, .1)
    padding-left: 9*$u
    @media screen and (max-width: $LWidth)
      padding-left: 5*$u
    @media screen and (max-width: $padWidth)
      border: none
      padding-left: 0
  &__title
    font-family: NunitoBold
    margin: 5*$u 0 4.25*$u
    color: $electricViolet
    font-size: 9.5*$u
    line-height: 12.5*$u
    @media screen and (max-width: $XLWidth)
      font-size: 7.5*$u
      line-height: 9*$u
  &__description
    margin-bottom: 6*$u
    font-size: 5*$u
    line-height: 6.5*$u
    @media screen and (max-width: $LWidth)
      font-size: 4.5*$u
    &.bold
      font-family: NunitoBold
  &__link
    cursor: pointer
    color: $royalBlue
    display: flex
    font-size: 6*$u
    line-height: 9.5*$u
    font-family: NunitoBold
    align-items: center
    transition: .2s
    margin-bottom: 46px
    margin-top: auto
    @media screen and (max-width: $padWidth)
      margin-bottom: 32px
      font-size: 18px
      line-height: 24px
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
    height: 60*$u
    object-fit: cover
    object-position: center
    width: 100%
    @media screen and (max-width: $padWidth)
</style>
