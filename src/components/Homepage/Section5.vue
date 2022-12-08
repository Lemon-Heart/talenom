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
          'Invoicing (e-mail)',
          'Bank account & card',
          'Payments',
          'Scanning & storing receipts & documents',
          'Travel claims',
          'Reports (P&L, balances, accounts, ledgers)',
          'Accounting system (invite your account or DIY)'
        ],
        price: 0,
        button: 'Download now',
        link: '',
        img: 'img/tariffs/1.png'
      },
      {
        id: 2,
        name: 'Most popular',
        title: 'Talenom One',
        description: 'Improve the management of your business as a self-employed person or a freelancer with an all in-one platform',
        list: [
          'Monthly bookkeeping',
          'Monthly P&L & balance sheet',
          'VAT',
          'Financial statement & registration',
          'Income tax return',
          'Bank account & card'
        ],
        price: 50,
        button: 'Try for free',
        link: '',
        img: 'img/tariffs/2.png'
      },
      {
        id: 3,
        name: 'Most powerful',
        title: 'Talenom Pro',
        description: 'Control of your growing business, digital automatisation and administrative tasks',
        list: [
          'Consolidated financial st.',
          'Reporting dimensions',
          'Tailored reports',
          'Following receivables & collection'
        ],
        price: '500+',
        button: 'Meet our expert',
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
