<template lang="pug">
section.section
  .cont
    .heading
      h2 Our community, our tribe, our people
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
        title: 'Entrepreneurs',
        description: 'The entreprenerial heart and mind is the core of our community. We use data, digital automatization, and proactive professionals to ensure the Entrepreneur feels cared for. We can plan the future together and guide and advise through the company’s life cycle. Cash flow is the oxygen, we make it flow. Our entrepreneurs shall never feel left alone.',
        linkText: 'Learn more services',
        link: '',
        img: 'img/aboutPage/2.png'
      },
      {
        id: 2,
        title: 'Enterprises',
        description: 'We grow as our customers grow. Our services expand to our partners’ needs. We become the trusted consultants that provide structure, deep knowledge, and proactive recommendations.We use this mindset to speak with and support Enterprises. We simplify the journey to success, we have the will and assurance to bring great results.',
        linkText: 'Learn more services',
        link: '',
        img: 'img/aboutPage/3.png'
      },
      {
        id: 3,
        title: 'Employees',
        description: 'The change starts with us. The confident, entrepreneurial mindset asks for courage and empathy. We harvest a culture of both and rely on our people who do too. We know our numbers but don’t hide behind them. Our people are our backbone and the motivation to grow with healthy financing and accurate accounting.',
        linkText: 'Come work with us',
        link: '',
        img: 'img/aboutPage/4.png'
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
    max-width: 205*$u
  .tariffs
    margin-top: 12.5*$u
    display: grid
    grid-template-columns: 32% 36% 32%
    @media screen and (max-width: $padWidth)
      grid-template-columns: 1fr
</style>
