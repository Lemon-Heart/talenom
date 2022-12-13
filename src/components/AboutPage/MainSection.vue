<template lang="pug">
section.section
  .cont
    .meeting
      .meeting__body
        h1.meeting__title The meaning of numbers
        .meeting__description Do you want to speak with your consultant? The Talenom platform allows you to book a call with them at a time that works for your schedule.
      img.meeting__img(src="img/aboutPage/9.png")
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
  margin-bottom: 15*$u
  padding: 25*$u 0 10*$u
  background: $hawkesBlue
  position: relative
  z-index: 1
  overflow: hidden
  @media screen and (max-width: $padWidth)
    padding: 7.5*$u 0 9.5*$u
  @media screen and (max-width: $mobileWidth)
    margin-bottom: 12.5*$u
  &:before, &:after
    content: ''
    position: absolute
    bottom: 0
    background-repeat: no-repeat
    background-size: 100% 100%
    background-position: bottom left
    @media screen and (max-width: $padWidth)
      background-size: cover
  &:before
    z-index: 1
    background-image: url('/public/img/bg-lines/yellowLine1.png')
    left: 0
    width: 65%
    height: 220px
    @media screen and (max-width: $XLWidth)
      bottom: -5%
      background-image: url('/public/img/bg-lines/line1.png')
      width: 75%
    @media screen and (max-width: $LWidth)
      left: -10%
      width: 85%
      bottom: -15%
    @media screen and (max-width: $padWidth)
      background-image: url('/public/img/bg-lines/line1-mobile.png')
      bottom: 0
      left: 0
      width: 65%
      background-position: top right
      height: 180px
    @media screen and (max-width: $MWidth)
      height: 140px
      width: 64%
  &:after
    z-index: -1
    background-image: url('/public/img/bg-lines/yellowLine2.png')
    right: 0
    width: 36%
    height: 90%
    @media screen and (max-width: $XLWidth)
      bottom: -5%
      background-image: url('/public/img/bg-lines/line2.png')
      width: 26%
    @media screen and (max-width: $LWidth)
      width: 30%
    @media screen and (max-width: $padWidth)
      background-image: url('/public/img/bg-lines/line2-mobile.png')
      bottom: 0
      width: 40%
      height: 80%
      background-position: top left
    @media screen and (max-width: $MWidth)
      height: 70%
      width: 41%
    @media screen and (max-width: $mobileWidth)
      height: 60%
  .meeting
    display: flex
    @media screen and (max-width: $padWidth)
      flex-direction: column
    &__body
      display: flex
      flex-direction: column
      padding-right: 25*$u
      width: 50%
      justify-content: space-between
      z-index: 1
      @media screen and (max-width: $XLWidth)
        padding-right: 12.5*$u
      @media screen and (max-width: $padWidth)
        padding-right: 0
        margin-bottom: 10*$u
        width: 100%
    &__description
      font-size: 6*$u
      line-height: 9.5*$u
      margin: 5*$u 0 7.5*$u
      @media screen and (max-width: $XLWidth)
        font-size: 4.5*$u
        line-height: 7*$u
        margin-bottom: 4*$u
      @media screen and (max-width: $padWidth)
        margin: 4*$u 0 7.5*$u
    &__img
      width: 50%
      object-fit: contain
      object-position: center
      padding-bottom: 15*$u
      @media screen and (max-width: $padWidth)
        width: 100%
      // @media screen and (max-width: $MWidth)
      //   width: 60%
      // @media screen and (max-width: $SWidth)
      //   width: 70%
</style>
