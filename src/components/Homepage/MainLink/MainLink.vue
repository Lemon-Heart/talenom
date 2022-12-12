<template lang="pug">
.link
  .link__name
    span {{ link.name }}
    ui-svg-icon(
      name="link"
      :width="24"
      :height="24"
    )
  .link__description {{ link.description }}
  ui-button.link__button(:variant="link.yellow ? 'yellow' : ''" size="M")
    a(:href="link.link" target="blank") {{ link.button }}
</template>

<script>
export default {
  components: { },
  props: {
    link: Object
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.link
  display: flex
  flex-direction: column
  align-items: center
  &:not(:last-child)
    margin-right: 15.5*$u
    @media screen and (max-width: $padWidth)
      margin-bottom: 11.25*$u
      margin-right: 0
  &:hover
    .link__name
      color: $electricViolet
      &:deep
        path
          fill: $electricViolet
  &__name
    display: flex
    font-family: NunitoBold
    font-size: 7.5*$u
    line-height: 8*$u
    align-items: center
    transition: .2s
    @media screen and (max-width: $padWidth)
      font-size: 6.25*$u
    span
      margin-right: 3.5*$u
      white-space: nowrap
    &:deep
      path
        transition: .2s
  &__description
    margin: 3.75*$u 0 6.25*$u
    text-align: center
    font-size: 4*$u
    line-height: 5*$u
    max-width: 61*$u
    @media screen and (max-width: $padWidth)
      margin: 2.5*$u 0 5*$u
  &__button
    margin-top: auto
</style>
