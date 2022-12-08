<template lang="pug">
.uiLanguageSelect(
  :class="{'open': isOpen, 'default': !header}"
  v-click-outside="closeSelect"
)
  .uiLanguageSelect__title(@click="toggleSelect")
    ui-svg-icon(
      v-if="!header"
      :name="`language-${languageController.languageId}`"
      :width="16"
      :height="16"
    )
    ui-svg-icon(
      v-else
      name="world"
      :width="20"
      :height="20"
    )
    span.uiLanguageSelect__name {{ languageController.languageName }}
    ui-svg-icon.uiLanguageSelect__icon(
      name="arrow"
      :width="8"
      :height="4"
    )
  .uiLanguageSelect__wrapper
    .uiLanguageSelect__body
      p(
        v-for="option in languageController.options"
        :key="option.id"
        @click="setLanguage(option.id)"
      ) {{ option.name }}
</template>

<script>
import { ref, inject } from 'vue'

export default {
  props: {
    header: Boolean
  },
  setup () {
    const store = inject('store')
    const languageController = store.language

    const isOpen = ref(false)

    const setLanguage = (option) => {
      languageController.languageId = option
      closeSelect()
    }

    const toggleSelect = () => (isOpen.value = !isOpen.value)

    const closeSelect = () => (isOpen.value = false)

    return { isOpen, languageController, setLanguage, closeSelect, toggleSelect }
  }
}
</script>

<style lang="sass" scoped>
.uiLanguageSelect
  position: relative
  &.open
    .uiLanguageSelect__icon
      transform: rotate(180deg)
    .uiLanguageSelect__body
      max-height: 150px
      padding-top: 2*$u
      padding-bottom: 2*$u
    .uiLanguageSelect__wrapper
      overflow: visible
  &.default
    width: 44.5*$u
    .uiLanguageSelect__wrapper
      margin-top: 0
      right: 0
    .uiLanguageSelect__title
      padding: 2.5*$u 4*$u
      border: 2px solid $perfume
      border-radius: 1.25*$u
      justify-content: flex-start
    .uiLanguageSelect__icon
      margin-left: auto
      &:deep
        path
          transition: .2s
          stroke: $white
  &__title
    cursor: pointer
    display: flex
    align-items: center
    justify-content: space-between
    box-sizing: border-box
    &:hover
      .uiLanguageSelect__icon
        &:deep
          path
            stroke: $electricViolet
  &__name
    margin-left: $u
  &__icon
    transition: .3s
    margin-left: 2*$u
  &__wrapper
    position: absolute
    right: -3*$u
    margin-top: 11*$u
    z-index: 10
    max-height: 0
    overflow: hidden
    &:before
      position: absolute
      top: -1.5*$u
      right: 3*$u
      content: ''
      border-color: transparent transparent $white transparent
      border-style: solid
      border-width: 0px 2.5*$u 3*$u 2.5*$u
      height: 0px
      width: 0px
  &__body
    box-shadow: 0px 0px 12.8003px rgba(129, 109, 101, 0.24)
    border-radius: 2.5*$u
    // z-index: 10
    // margin-top: 2*$u
    // right: -3*$u
    // position: absolute
    background: $white
    padding: 0px 4*$u
    max-height: 0
    display: flex
    flex-direction: column
    overflow: hidden
    transition: .3s
    @media screen and (max-width: $LWidth)
      left: 0
      right: auto
  & p
    text-align: start
    color: #151E3F
    cursor: pointer
    margin: 0
    padding: 8px 0px
    font-weight: 500
    font-size: 14px
</style>
