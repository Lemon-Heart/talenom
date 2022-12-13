<template lang="pug">
main-section
advantages-section
callback-section
tariffs-section
partners-section
about-section
blog-section
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
import BlogSection from '@/components/Homepage/BlogSection'
import QuestionsSection from '@/components/Homepage/QuestionsSection'
import ContactSection from '@/components/Homepage/ContactSection'

export default {
  components: { MainSection, PartnersSection, AdvantagesSection, CallbackSection, TariffsSection, AboutSection, BlogSection, QuestionsSection, ContactSection },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
</style>
