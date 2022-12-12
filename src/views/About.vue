<template lang="pug">
//- challenge-section
advantages-section
tariffs-section
last-section
</template>

<script>
import LastSection from '@/components/AboutPage/LastSection'
import TariffsSection from '@/components/AboutPage/TariffsSection'
import ChallengeSection from '@/components/AboutPage/ChallengeSection'
import AdvantagesSection from '@/components/AboutPage/AdvantagesSection'

export default {
  components: { LastSection, TariffsSection, ChallengeSection, AdvantagesSection },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
</style>
