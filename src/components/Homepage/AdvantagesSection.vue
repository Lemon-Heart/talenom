<template lang="pug">
section.section
  .cont
    infoblock-column(:items="advantages" nm rs)
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
        title: 'invoicing made easy',
        description: 'Talenom has been a leader in e-invoicing and makes sure you benefit from the effiency it brings to your business while ensuring you are compliant with government mandates.',
        link: 'Learn more about Talenom Software',
        to: '',
        img: 'img/homePage/advantages/1.png'
      },
      {
        id: 2,
        title: 'Accounting for doers',
        description: 'Talenom One is the perfect package for entrepreneurs on the move. We’ve got you covered with the best accounting and financial services team in town. Wouldn’t you like to spend more time doing what you love and less time working on VAT?',
        link: 'Learn more about Talenom One',
        to: '',
        img: 'img/homePage/advantages/2.png'
      },
      {
        id: 3,
        title: 'Proactive support',
        description: 'Your Talenom consultant has their fingers on the financial pulse of your business and with regularly schedulled meetings and calls, we make sure you get the advice and information you need to make important decisions.',
        link: 'Learn more about Talenom Pro',
        to: '',
        img: 'img/homePage/advantages/3.png'
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
  &:deep
    .item:last-child
      .item__body
        margin-bottom: 20*$u
      .item__img
        @media screen and (max-width: $XXLWidth)
          width: 50%
        @media screen and (max-width: $padWidth)
          width: 100%
</style>
