<template lang="pug">
section.section
  .cont
    .heading
      span
        h2 How it all comes together
      .heading__description To us, care is passing on a positive can-do attitude and sharing responsibility
    .content
      .content__left
        .content__item
          .bold Empathy is the starting point.
          | Empathy makes it possible to care and understand. Understanding creates trust and trust gives freedom. Freedom to live as an entrepreneur.
        .content__item
          .bold Fear is your biggest enemy,
          | whether you are just starting, renewing, or mastering your business. With unnegotiable figures and statistics, we can encourage and direct focus on core game-changers of your success.
        .content__item
          .bold Successful businesses are so much more than just financing.
          | Still, the most rewarding insight is that numbers and finances can direct and ease your decision-making bringing clarity to the big picture.
      .content__right
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
.bold
  font-family: NunitoBold
.section
  margin: 15*$u 0 35*$u
  @media screen and (max-width: $mobileWidth)
    margin: 12.5*$u 0 20*$u
  .heading
    display: flex
    justify-content: space-between
    margin-bottom: 15*$u
    align-items: center
    @media screen and (max-width: $LWidth)
      flex-direction: column
      margin-bottom: 8.75*$u
    h2
      padding-right: 15*$u
      @media screen and (max-width: $LWidth)
        margin-bottom: 3.5*$u
        padding-right: 0
    & > *
      width: 50%
      flex-shrink: 0
      @media screen and (max-width: $LWidth)
        width: 100%
    &__description
      font-size: 8.75*$u
      line-height: 140%
    @media screen and (max-width: $XLWidth)
      font-size: 6*$u
      line-height: 7.5*$u
  .content
    display: flex
    @media screen and (max-width: $LWidth)
      flex-direction: column
    > *
      width: 50%
      flex-shrink: 0
      @media screen and (max-width: $LWidth)
        width: 100%
    &__left
      padding-right: 15*$u
      @media screen and (max-width: $LWidth)
        padding-right: 0
    &__item
      padding: 7.5*$u 0
      border-bottom: .5*$u solid rgb(20, 31, 46, .1)
      font-size: 6*$u
      line-height: 9.5*$u
      @media screen and (max-width: $XLWidth)
        font-size: 4.5*$u
        line-height: 7*$u
        padding: 5*$u 0
      &:last-child
        border: none
        padding-bottom: 0
      &:first-child
        padding-top: 0
    &__right
      background-image: url('/public/img/aboutPage/1.png')
      background-repeat: no-repeat
      background-size: cover
      background-position: center
      @media screen and (max-width: $LWidth)
        margin-top: 7.5*$u
        height: 100*$u
</style>
