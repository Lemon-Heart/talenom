import { ref } from 'vue'

export default function DropdownMenuController () {
  const isOpen = ref(false)
  const toggle = () => {
    document.body.classList.toggle('fixed')
    isOpen.value = !isOpen.value
  }
  const close = () => {
    document.body.classList.remove('fixed')
    isOpen.value = false
  }
  const open = () => {
    document.body.classList.add('fixed')
    isOpen.value = true
  }

  return { isOpen, toggle, close, open }
}
