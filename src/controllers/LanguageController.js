import { ref, reactive, computed } from 'vue'

export default function LanguageController () {
  const languageId = ref(1)
  const languageName = computed(() => options.find((o) => o.id === languageId.value).name)
  const options = reactive([
    {
      id: 1,
      name: 'English'
    },
    {
      id: 2,
      name: 'Русский'
    }
  ])

  return {
    languageId,
    languageName,
    options
  }
}
