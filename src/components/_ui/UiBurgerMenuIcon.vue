<template lang="pug">
.burgerMenu(:class="{'open': controller.isOpen}" @click="controller.toggle")
  span(v-for="i in 3" :key="i")
</template>

<script>
import { inject, computed } from 'vue'

export default {
  setup () {
    const store = inject('store')
    const controller = computed(() => store.dropdownMenu)

    return { controller }
  }
}
</script>

<style lang="sass" scoped>
.burgerMenu
  width: 26px
  height: 17px
  position: relative
  transition: .3s
  cursor: pointer
  display: inline-block
  flex-shrink: 0
.burgerMenu span
  width: 6.5*$u
  height: .75*$u
  display: block
  border-radius: 2*$u
  position: absolute
  background: $mirage
  transition: .5s cubic-bezier(.8, .5, .2, 1.4)
.burgerMenu span:nth-child(1)
  left: 0
  top: 0
.burgerMenu span:nth-child(2)
  top: 50%
  left: 0
  transform: translate(0, -50%)
.burgerMenu span:nth-child(3)
  left: 0
  bottom: 0
.burgerMenu.open
  transition: .2s cubic-bezier(.8, .5, .2, 1.4)
.burgerMenu.open span:nth-child(1)
  transform: rotate(-45deg) translate(-4px, 6px)
.burgerMenu.open span:nth-child(2)
  transform: translate(100%, -50%)
  opacity: 0
.burgerMenu.open span:nth-child(3)
  transform: rotate(45deg) translate(-4px, -6px)
</style>
