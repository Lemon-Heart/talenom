<template lang="pug">
section.section
  .cont
    .links
      a.left.link
        img.left__img(src="/img/1.png")
        .left__body
          .icon
            ui-svg-icon(
              name="link"
              :width="33"
              :height="33"
            )
          .left__date 10 June, 2022
          h3 We are growing even bigger and even better
      a.right.link
        .right__img
          h2 Hungry for more
          h3 Read more articles on our blog
        .right__body
          .icon
            ui-svg-icon(
              name="link"
              :width="33"
              :height="33"
            )
          h3 To the blog
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
  @media screen and (max-width: $padWidth)
    .cont
      padding: 0
  .links
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 10*$u
    @media screen and (max-width: $padWidth)
      grid-template-columns: 1fr
      gap: 0
    .link
      display: flex
      flex-direction: column
      cursor: pointer
      &:hover
        .icon
          opacity: .7
    .left
      &__img
        height: 60%
        width: 100%
        object-fit: cover
        object-position: center
      &__body
        height: 40%
        position: relative
        padding: 4.25*$u 7.5*$u 7.5*$u 7.5*$u
        background: $electricViolet
        color: $white
        display: flex
        flex-direction: column
        @media screen and (max-width: $padWidth)
          padding: 5*$u
        > *:last-child
          margin-top: auto
      &__date
        opacity: .6
    .right
      &__img
        height: 126*$u
        background-image: url('/public/img/blogLine.png')
        background-position: center
        background-repeat: no-repeat
        background-size: cover
        background-color: $white
        padding: 10*$u 10*$u 10*$u 12.5*$u
        @media screen and (max-width: $padWidth)
          padding: 5*$u
          height: 80*$u
        > *:last-child
          margin-top: 5*$u
          max-width: 100*$u
      &__body
        position: relative
        padding: 7.5*$u 7.5*$u 7.5*$u 12.5*$u
        background: $coral
        color: $white
        @media screen and (max-width: $padWidth)
          padding: 5*$u
    .icon
      position: absolute
      right: 6.25*$u
      top: 6.25*$u
      @media screen and (max-width: $padWidth)
        right: 4*$u
        top: 4*$u
        .svgIconComponent
          width: 6*$u!important
          height: 6*$u!important
      &:deep
        path
          fill: $white
</style>
