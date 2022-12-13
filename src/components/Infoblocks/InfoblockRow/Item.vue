<template lang="pug">
.item
  .item__name(v-if="item.name" :class="{'_popular': item.id === 2, '_pro': item.id === 3}") {{ item.name }}
  .item__title {{ item.title }}
  .item__description(:class="{ 'bold': item.secondDescription }" v-html="item.description")
  .item__for(v-if="item.list") Best for
  ul.item__list(v-if="item.list")
    li(
      v-for="(li, i) in item.list"
      :key="i"
    )
      span {{ li }}
  .item__description(v-if="item.secondDescription") {{ item.secondDescription }}
  .item__price(v-if="item.price")
    span from
    span.price € {{ item.price }}
    | /mo
  ui-link.item__link(v-if="item.link" :to="item.to") {{ item.link }}
  ui-button.item__button(v-if="item.button" :variant="item.id === 3 ? 'yellow' : ''" is-responsive)
    a(:href="item.to" target="blank") {{ item.button }}
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
  &__for
    font-family: NunitoBold
    font-size: 4.5*$u
    line-height: 5*$u
    margin-bottom: 5*$u
  &__list
    margin-bottom: 6.25*$u
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
  &__link
    margin-bottom: 11.5*$u
    margin-top: auto
    @media screen and (max-width: $padWidth)
      margin-bottom: 8*$u
  &__img
    height: 60*$u
    object-fit: cover
    object-position: center
    width: 100%
</style>
