<template lang="pug">
.infoblock(:class="{ 'nm': nm, 'rs': rs, 'ls': !rs }")
  item(
    v-for="item in items"
    :key="item.id"
    :item="item"
  )
</template>

<script>
import Item from './Item'

export default {
  components: { Item },
  props: {
    items: Object,
    nm: Boolean,
    rs: Boolean
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.infoblock
  display: flex
  flex-direction: column
  &.nm
    &:deep
      .item
        margin-bottom: 0
        @media screen and (max-width: $padWidth)
          margin-bottom: 20*$u
  &.rs
    &:deep
      .item:nth-child(2n)
        flex-direction: row-reverse
        @media screen and (max-width: $padWidth)
          flex-direction: column-reverse!important
  &.ls
    &:deep
      .item:nth-child(2n - 1)
        flex-direction: row-reverse
</style>
