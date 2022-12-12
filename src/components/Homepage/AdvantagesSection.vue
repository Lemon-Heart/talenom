<template lang="pug">
section.section
  .cont
    .advantages
      advantage(
        v-for="advantage in advantages"
        :key="advantage.id"
        :advantage="advantage"
      )
</template>

<script>
import { reactive } from 'vue'
import Advantage from './Advanatage/Advantage'

export default {
  components: { Advantage },
  setup () {
    const advantages = reactive([
      {
        id: 1,
        title: 'E-invoicing made easy',
        description: 'Talenom has been a leader in e-invoicing and makes sure you benefit from the effiency it brings to your business while ensuring you are compliant with government mandates.',
        linkTitle: 'Learn more about Talenom Software',
        link: ''
      },
      {
        id: 2,
        title: 'Bank account included',
        description: 'Need a bank account for your business? With Talenom One you can simply extend our solution to include a fully integrated Euro bank account and Mastercard®. And did we mention it is commission free?',
        linkTitle: 'Learn more about Talenom One',
        link: ''
      },
      {
        id: 3,
        title: 'Proactive support',
        description: 'Your Talenom consultant has their fingers on the financial pulse of your business and with regularly schedulled meetings and calls, we make sure you get the advice and information you need to make important decisions.',
        linkTitle: 'Learn more about Talenom Pro',
        link: ''
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
  .advantages
    display: flex
    flex-direction: column
</style>
