<template lang="pug">
section.section
  .cont
    .heading
      h2 Choose the plan that is best for you
    infoblock-row(:items="tariffs")
</template>

<script>
import { reactive } from 'vue'
import InfoblockRow from '@/components/Infoblocks/InfoblockRow/Infoblock'

export default {
  components: { InfoblockRow },
  setup () {
    const tariffs = reactive([
      {
        id: 1,
        name: 'Starting',
        title: 'Talenom Software',
        description: 'Control of your business, digital automation and administrative tasks',
        list: [
          'Freelancers',
          'Self-employed',
          'Micro companies',
          'Small companies'
        ],
        price: '0',
        secondDescription: 'Software that makes your life easier and helps grow your business',
        to: '',
        button: 'Find out more',
        img: 'img/homePage/tariffs/1.png'
      },
      {
        id: 2,
        name: 'Most popular',
        title: 'Talenom One',
        description: 'Improve the management of your business with an all in-one platform',
        list: [
          'Freelancers',
          'Self-employed',
          'Micro companies',
          'Small companies'
        ],
        price: 50,
        secondDescription: 'A packaged solution of our software and accounting services',
        to: '',
        button: 'Find out more',
        img: 'img/homePage/tariffs/2.png'
      },
      {
        id: 3,
        name: 'Most powerful',
        title: 'Talenom Pro',
        description: 'Insights to your business, digital automation and proactive support',
        list: [
          'Small companies',
          'Mid-size companies',
          'Associations'
        ],
        price: '500+',
        secondDescription: 'Experts dedicated to providing individual proactive tax, accountancy and financial services ',
        to: '',
        button: 'Find out more',
        img: 'img/homePage/tariffs/3.png'
      }
    ])
    return { tariffs }
  }
}
</script>

<style lang="sass" scoped>
.section
  margin: 15*$u 0
  @media screen and (max-width: $mobileWidth)
    margin: 12.5*$u 0
  .heading
    text-align: center
    max-width: 205*$u
    margin: auto
  @media screen and (max-width: $padWidth)
    &:deep
      .item__img
        display: none
</style>
