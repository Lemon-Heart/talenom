<template lang="pug">
section.section
  .feedback
    .feedback__form
      h2 Contact us
      .feedback__description Fill in your details below and we will contact you shortly
      ui-input.feedback__input(v-model="name" placeholder="Name")
      ui-input.feedback__input(v-model="email" placeholder="Email address")
      ui-input.feedback__input(v-model="message" placeholder="Comments/Questions")
      ui-button(variant="yellow" is-responsive) Send
      .feedback__policy By submitting, you agree to our
        router-link(:to="{ name: 'Test' }") Privacy Policy
    img.feedback__img(src="/img/homePage/feedbackPhoto.png")
</template>

<script>
import { ref } from 'vue'

export default {
  components: { },
  setup () {
    const name = ref()
    const email = ref()
    const message = ref()

    return { name, email, message }
  }
}
</script>

<style lang="sass" scoped>
.section
  margin: 15*$u 0 0
  background: $hawkesBlue
  @media screen and (max-width: $mobileWidth)
    margin: 12.5*$u 0 0
  .feedback
    display: flex
    align-items: center
    padding-left: calc((100% - 1320px) / 2)
    @media screen and (max-width: $XXLWidth)
      padding-left: 15*$u
    @media screen and (max-width: $LWidth)
      flex-direction: column
      padding-left: 0
    &__form
      padding: 10*$u 21*$u 10*$u 0
      width: calc(1320px / 2)
      flex-shrink: 0
      @media screen and (max-width: $XXLWidth)
        width: calc((100% / 2) - #{15*$u / 2})
        padding: 7.5*$u 21*$u 7.5*$u 0
      @media screen and (max-width: $LWidth)
        padding: 7.5*$u 10*$u
        width: 100%
      @media screen and (max-width: $MWidth)
        padding: 7.5*$u 5*$u
    &__description
      margin: 3.75*$u 0
      font-size: 7*$u
      line-height: 9*$u
      @media screen and (max-width: $MWidth)
        font-size: 4.5*$u
        line-height: 7*$u
    &__input
      margin-bottom: 5.5*$u
    &__policy
      font-size: 3.5*$u
      margin-top: 5*$u
      a
        border-bottom: 1px solid $mirage
        margin-left: $u
    &__img
      width: 100%
      max-height: 160*$u
      object-fit: cover
      object-position: center
      @media screen and (max-width: $XXLWidth)
        height: 100%
        width: calc((100% / 2) + #{15*$u})
      @media screen and (max-width: $XLWidth)
        width: calc((100% / 2) + #{25*$u})
      @media screen and (max-width: $LWidth)
        width: 100%
      @media screen and (max-width: $padWidth)
        max-height: 130*$u
      @media screen and (max-width: $MWidth)
        max-height: 115*$u
      @media screen and (max-width: $SWidth)
        max-height: 100*$u
      @media screen and (max-width: $mobileWidth)
        max-height: 86*$u
</style>
