<template lang="pug">
section.section
  .cont
    .heading
      h2 Choose the plan that is best for you
    .tariffs
      tariff(
        v-for="tariff in tariffs"
        :key="tariff.id"
        :tariff="tariff"
      )
</template>

<script>
import { reactive } from 'vue'
import Tariff from './Tariff/Tariff'

export default {
  components: { Tariff },
  setup () {
    const tariffs = reactive([
      {
        id: 1,
        name: 'Starting',
        title: 'Talenom Software',
        description: 'Control of your growing business, digital automatisation and administrative tasks',
        list: [
          'Freelancers',
          'Self-employed',
          'Micro companies',
          'Small companies'
        ],
        price: 0,
        secondDescription: 'Software that makes your life easier and helps grow your business',
        link: '',
        img: 'img/tariffs/1.png'
      },
      {
        id: 2,
        name: 'Most popular',
        title: 'Talenom One',
        description: 'Improve the management of your business as a self-employed person or a freelancer with an all in-one platform',
        list: [
          'Freelancers',
          'Self-employed',
          'Micro companies',
          'Small companies'
        ],
        price: 50,
        secondDescription: 'A packaged solution of our software and accounting services',
        link: '',
        img: 'img/tariffs/2.png'
      },
      {
        id: 3,
        name: 'Most powerful',
        title: 'Talenom Pro',
        description: 'Control of your growing business, digital automatisation and administrative tasks',
        list: [
          'Small companies',
          'Mid-size companies',
          'Associations'
        ],
        price: '500+',
        secondDescription: 'Experts dedicated to providing individual proactive tax, accountancy and financial services ',
        link: '',
        img: 'img/tariffs/3.png'
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
  .tariffs
    margin-top: 12.5*$u
    display: grid
    grid-template-columns: 32% 36% 32%
    @media screen and (max-width: $padWidth)
      grid-template-columns: 1fr
</style>
