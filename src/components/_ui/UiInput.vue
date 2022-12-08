<template lang="pug">
label.uiInputComponent(v-show="type !== 'hidden'" :class="classed")
  input.input(
    ref="input"
    :class="{_withBorder: withBorder}"
    :type="type === 'password' ? viewPass : type"
    :value="modelValue"
    :name="name"
    :placeholder="placeholder"
    @input="update"
  )
  template(v-if="type === 'password'")
    .icon(v-if="iconName" @click="toggleViewPass")
      ui-svg-icon(:name="iconName" :size="30")
  template(v-else)
    .icon(v-if="iconName" @click="onIconClick")
      ui-svg-icon(:name="iconName" :size="30")
</template>

<script>
import { ref, computed } from 'vue'

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    iconName: {
      type: String,
      default: ''
    },
    withBorder: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const update = (e) => emit('update:modelValue', e.target.value)

    const viewPass = ref('password')
    const toggleViewPass = () => {
      viewPass.value === 'password' ? viewPass.value = 'text' : viewPass.value = 'password'
    }

    const onIconClick = () => emit('onIconClick')

    const classed = computed(() => {
      const className = []
      props.error ? className.push('error') : className.filter(function (f) { return f !== 'error' })
      viewPass.value === 'password' ? className.filter(function (f) { return f !== 'show' }) : className.push('show')
      return className
    })

    return { update, onIconClick, viewPass, toggleViewPass, classed }
  }
}
</script>

<style lang="sass" scoped>
.uiInputComponent
  width: 100%
  display: flex
  position: relative
  flex-direction: column
  &.error
    .input
      border: .5*$u solid $burntSienna
  &.show .icon:before
    content: ''
    position: absolute
    width: 7.5*$u
    height: .5*$u
    background: $mirage
    transform: rotate(-45deg)
    top: 3.5*$u
    right: 0
  > .input
    height: 14*$u
    width: 100%
    display: block
    padding: 4*$u 5*$u
    border-radius: 1.25*$u
    background: $titanWhite
    border: .5*$u solid transparent
    transition: .2s
    &:hover
      background: $porcelain
    &:focus
      border: .5*$u solid $periwinkleGray
    @media screen and (max-width: $MWidth)
      height: 12.5*$u
    &::-webkit-input-placeholder
      opacity: .5
    &::-moz-placeholder
      opacity: .5
    &:-moz-placeholder
      opacity: .5
    &:-ms-input-placeholder
      opacity: .5
    &._withBorder
      border-color: $mirage
  > .icon
    cursor: pointer
    position: absolute
    transform: translate(0, -50%)
    top: 50%
    right: 10px
</style>
