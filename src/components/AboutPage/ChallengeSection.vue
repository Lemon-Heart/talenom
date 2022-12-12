<template lang="pug">
section.section
  .cont
    .challenge
      .challenge__img
      h1.challenge__h1 We dare to challenge
      h3.challenge__h3 We inspire to follow the journey of entrepreneurship in a similar way we are building ours
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
  margin: 15*$u 0 35*$u
  background: #FD7B43
  color: white
  @media screen and (max-width: $mobileWidth)
    margin: 12.5*$u 0 20*$u
  .challenge
    display: grid
    grid-template-areas: 'img h1' 'img h3'
    .challenge__img
      grid-area: img
    .challenge__h1
      grid-area: h1
    .challenge__h3
      grid-area: h3
</style>
