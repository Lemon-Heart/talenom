import { reactive } from 'vue'
import ModalQueueController from '@/controllers/ModalQueueController'
import LanguageController from '@/controllers/LanguageController'
import DropdownMenuController from '@/controllers/DropdownMenuController'

const store = reactive({})

export default store

export function initStore () {
  store.modalQueue = ModalQueueController()
  store.language = LanguageController()
  store.dropdownMenu = DropdownMenuController()
}
