<template lang="pug">
section.section
  .cont
    infoblock-column(:items="advantages")
</template>

<script>
import { reactive } from 'vue'
import InfoblockColumn from '@/components/Infoblocks/InfoblockColumn/Infoblock'

export default {
  components: { InfoblockColumn },
  setup () {
    const advantages = reactive([
      {
        id: 1,
        title: 'The value of numbers',
        description: 'We will never run out of numbers. They measure the world, but it’s us who give meaning and value to them.<br><br>For over 50 years we’ve shared this mission with our clients, valued their courage, <b>cared about their needs, and driven toward the future with healthier businesses.</b><br><br>We strive to make the world run better with better numbers.',
        img: 'img/aboutPage/6.png'
      },
      {
        id: 2,
        title: 'Strength in numbers',
        description: 'Our founder Paavo Tahkola set in motion Talenom’s journey in 1972 and his belief in his idea and himself continues to inspire us each and every day as we grow across Finland, Sweden and now Spain.<br><br>One brave entrepreneur in a small office has expanded into a team of over a thousand dedicated specialists working in concert to help our customers achieve their individual dreams.<br><br><b>We look for strength in numbers and believe in the power of one.</b>',
        img: 'img/aboutPage/7.png'
      },
      {
        id: 3,
        title: 'What we believe in',
        description: 'We trust in willpower and the persistence of entrepreneurs. Even if we get knocked out three times in a row, we still keep going. We believe in ourselves when we decide to embark on a new venture.<br><br><b>Our employees’ well-being is reflected on our customers, the entrepreneurs.</b><br><br>We do not strive to be perfect in all ways, but, instead, human and rough around the edges. Caring shines through in all our work.',
        img: 'img/aboutPage/8.png'
      }
    ])
    return { advantages }
  }
}
</script>

<style lang="sass" scoped>
.section
  margin: 15*$u 0
  @media screen and (max-width: $mobileWidth)
    margin: 12.5*$u 0
</style>
