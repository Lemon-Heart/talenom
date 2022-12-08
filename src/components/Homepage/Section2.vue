<template lang="pug">
section.section
  .cont
    .heading
      h3 Сlients and partners
    .partners
      img.partners__item(
        v-for="i in 6"
        :key="i"
        :src="`img/partners/${i}.png`"
      )
</template>

<script>
export default {
  components: { },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.section
  margin: 15*$u 0
  @media screen and (max-width: $mobileWidth)
    margin: 12.5*$u 0
  .heading
    text-align: center
    max-width: 205*$u
    margin: auto
  .partners
    margin-top: 6.5*$u
    display: grid
    grid-template-columns: repeat(6, 1fr)
    align-items: center
    justify-content: center
    gap: 18*$u
    @media screen and (max-width: $XXLWidth)
      grid-template-columns: repeat(3, 1fr)
    @media screen and (max-width: $padWidth)
      gap: 10*$u
    @media screen and (max-width: $MWidth)
      margin-top: 10*$u
      grid-template-columns: repeat(2, 1fr)
      gap: 5*$u
      > *
        width: 70%
    &__item
      margin: auto
</style>
