<template lang="pug">
section.section
  .challenge
    .challenge__img
    h1.challenge__h1 Try your wings
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
  background: $coral
  color: $white
  @media screen and (max-width: $mobileWidth)
    margin: 12.5*$u 0 20*$u
  .challenge
    display: grid
    grid-template-areas: 'img h1' 'img h3'
    grid-template-columns: 1fr calc(1320px / 2)
    grid-auto-rows: 1fr 1fr
    max-height: 135*$u
    padding-right: calc((100% - 1320px) / 2)
    @media screen and (max-width: $XXLWidth)
      max-height: 120*$u
      padding-right: 15*$u
      grid-template-columns: 1fr calc((100% / 2) - #{15*$u / 2})
    @media screen and (max-width: $LWidth)
      padding-left: 15*$u
      max-height: none
      grid-template-areas: 'h1' 'img' 'h3'
      grid-auto-rows: auto 150*$u auto
      grid-template-columns: 1fr
    @media screen and (max-width: $LWidth)
      grid-auto-rows: auto 125*$u auto
      padding: 0 10*$u
    @media screen and (max-width: $padWidth)
      grid-auto-rows: auto 125*$u auto
      padding: 0 10*$u
    @media screen and (max-width: $MWidth)
      grid-auto-rows: auto 100*$u auto
      padding: 0 5*$u
    .challenge__img
      grid-area: img
      width: 100%
      height: 100%
      background-image: url('/public/img/aboutPage/5.png')
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      @media screen and (max-width: $LWidth)
        background-size: 145% 100%
        width: calc(100% + #{20*$u})
        margin-left: -10*$u
      @media screen and (max-width: $MWidth)
        width: calc(100% + #{10*$u})
        margin-left: -5*$u
    .challenge__h1
      grid-area: h1
      margin-top: 7*$u
    .challenge__h3
      grid-area: h3
      margin-bottom: 10*$u
      margin-top: auto
</style>
