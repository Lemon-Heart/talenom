<template lang="pug">
.tariff
  .tariff__name(:class="{'_popular': tariff.id === 2, '_pro': tariff.id === 3}") {{ tariff.name }}
  .tariff__title {{ tariff.title }}
  .tariff__description {{ tariff.description }}
  .tariff__bonus(v-if="tariff.id > 1") All the previous perks
  ul.tariff__list
    li(
      v-for="(li, i) in tariff.list"
      :key="i"
    )
      span {{ li }}
  .tariff__price
    span from
    span.price € {{ tariff.price }}
    | /mo
  ui-button.tariff__button(:variant="tariff.id === 3 ? 'yellow' : ''" is-responsive)
    a(:href="tariff.link" target="blank") {{ tariff.button }}
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
  &__name
    width: fit-content
    color: $black
    font-family: NunitoBold
    font-size: 3.5*$u
    line-height: 5*$u
    border-radius: 6*$u
    padding: $u 2.5*$u
    background: $perfume
    &._popular
      background: $hawkesBlue
    &._pro
      background: $rajah
  &__title
    margin: 4*$u 0
    color: $electricViolet
    font-size: 9.5*$u
    line-height: 12.5*$u
    @media screen and (max-width: $XLWidth)
      font-size: 7.5*$u
      line-height: 9*$u
  &__description
    color: $black
    margin-bottom: 6*$u
    font-size: 5*$u
    line-height: 6.5*$u
    @media screen and (max-width: $LWidth)
      font-size: 4.5*$u
  &__bonus
    font-family: NunitoBold
    font-size: 4.5*$u
    line-height: 5*$u
    margin-bottom: 5*$u
  &__list
    margin-bottom: 5*$u
    font-size: 4.5*$u
    @media screen and (max-width: $LWidth)
      font-size: 3.5*$u
    li:not(:last-child)
      margin-bottom: 5*$u
      @media screen and (max-width: $LWidth)
        margin-bottom: 3*$u
  &__price
    font-size: 6*$u
    line-height: 8*$u
    margin-top: auto
    white-space: nowrap
    span:first-child
      @media screen and (max-width: $LWidth)
        display: none
    .price
      font-family: NunitoBold
      margin: 0 $u 0 3*$u
      font-size: 16*$u
      line-height: 25*$u
      @media screen and (max-width: $XLWidth)
        font-size: 12*$u
        line-height: 12*$u
      @media screen and (max-width: $LWidth)
        margin-left: 0
  &__button
    margin: 4.5*$u 0 11*$u
    @media screen and (max-width: $padWidth)
      margin-bottom: 0
  &__img
    height: 60*$u
    object-fit: cover
    object-position: center
    width: 100%
    @media screen and (max-width: $padWidth)
      display: none
</style>
