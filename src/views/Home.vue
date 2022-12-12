<template lang="pug">
main-section
advantages-section
callback-section
tariffs-section
partners-section
//- about-section
section-7
section-8
section-9
</template>

<script>
import MainSection from '@/components/Homepage/MainSection'
import PartnersSection from '@/components/Homepage/PartnersSection'
import AdvantagesSection from '@/components/Homepage/AdvantagesSection'
import CallbackSection from '@/components/Homepage/CallbackSection'
import TariffsSection from '@/components/Homepage/TariffsSection'
import AboutSection from '@/components/Homepage/AboutSection'
import Section7 from '@/components/Homepage/Section7.vue'
import Section8 from '@/components/Homepage/Section8.vue'
import Section9 from '@/components/Homepage/Section9.vue'

export default {
  components: { MainSection, PartnersSection, AdvantagesSection, CallbackSection, TariffsSection, AboutSection, Section7, Section8, Section9 },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
</style>
