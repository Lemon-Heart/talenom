<template lang="pug">
main-section
advantages-section
callback-section
tariffs-section
partners-section
//- about-section
section-7
questions-section
contact-section
</template>

<script>
import MainSection from '@/components/Homepage/MainSection'
import PartnersSection from '@/components/Homepage/PartnersSection'
import AdvantagesSection from '@/components/Homepage/AdvantagesSection'
import CallbackSection from '@/components/Homepage/CallbackSection'
import TariffsSection from '@/components/Homepage/TariffsSection'
import AboutSection from '@/components/Homepage/AboutSection'
import Section7 from '@/components/Homepage/Section7.vue'
import QuestionsSection from '@/components/Homepage/QuestionsSection'
import ContactSection from '@/components/Homepage/ContactSection'

export default {
  components: { MainSection, PartnersSection, AdvantagesSection, CallbackSection, TariffsSection, AboutSection, Section7, QuestionsSection, ContactSection },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
</style>
