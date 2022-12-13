<template lang="pug">
a.link(:href="to")
  span
    slot
  ui-svg-icon(
    name="link"
    :width="20"
    :height="20"
  )
</template>

<script>
export default {
  props: { to: String }
}
</script>

<style lang="sass" scoped>
.link
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
</style>
