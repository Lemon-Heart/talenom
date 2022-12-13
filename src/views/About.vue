<template lang="pug">
main-section
advantages-section
challenge-section
tariffs-section(id="aboutSection")
last-section(id="lastAboutSection")
</template>

<script>
import MainSection from '@/components/AboutPage/MainSection'
import LastSection from '@/components/AboutPage/LastSection'
import TariffsSection from '@/components/AboutPage/TariffsSection'
import ChallengeSection from '@/components/AboutPage/ChallengeSection'
import AdvantagesSection from '@/components/AboutPage/AdvantagesSection'

export default {
  components: { LastSection, TariffsSection, ChallengeSection, AdvantagesSection, MainSection },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
</style>
