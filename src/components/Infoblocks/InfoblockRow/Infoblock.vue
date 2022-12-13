<template lang="pug">
.infoblock
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
    items: Object
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.infoblock
  margin-top: 12.5*$u
  display: grid
  grid-template-columns: 32% 36% 32%
  @media screen and (max-width: $padWidth)
    grid-template-columns: 1fr
</style>
