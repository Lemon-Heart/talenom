<template lang="pug">
section.section
  .cont
    .heading
      h2 Our community, our tribe, our people
    infoblock-row(:items="info")
</template>

<script>
import { reactive } from 'vue'
import InfoblockRow from '@/components/Infoblocks/InfoblockRow/Infoblock'

export default {
  components: { InfoblockRow },
  setup () {
    const info = reactive([
      {
        id: 1,
        title: 'Entrepreneurs',
        description: 'The entreprenerial heart and mind is the core of our community. <b>We use data, digital automatization, and proactive professionals to ensure the Entrepreneur feels cared for.</b> We can plan the future together and guide and advise through the company’s life cycle. Cash flow is the oxygen, we make it flow. Our entrepreneurs shall never feel left alone.',
        link: 'Learn more services',
        to: '',
        img: 'img/aboutPage/2.png'
      },
      {
        id: 2,
        title: 'Enterprises',
        description: 'We grow as our customers grow. Our services expand to our partners’ needs. We become the trusted consultants that provide structure, deep knowledge, and proactive recommendations.We use this mindset to speak with and support Enterprises. We simplify the journey to success, <b>we have the will and assurance to bring great results.</b>',
        link: 'Learn more services',
        to: '',
        img: 'img/aboutPage/3.png'
      },
      {
        id: 3,
        title: 'Employees',
        description: 'The change starts with us. The confident, entrepreneurial mindset asks for courage and empathy. We harvest a culture of both and rely on our people who do too. We know our numbers but don’t hide behind them. <b>Our people are our backbone and the motivation to grow with healthy financing and accurate accounting.</b>',
        link: 'Come work with us',
        to: '',
        img: 'img/aboutPage/4.png'
      }
    ])
    return { info }
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
</style>
