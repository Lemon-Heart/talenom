<template lang="pug">
form.signinForm(ref="form")
  ui-input(v-model="name" name="name" placeholder="login")
  ui-input(
    v-model="pass"
    type="password"
    name="pass"
    placeholder="pass"
    iconName="eye"
  )
  ui-button.button(:is-animated="!error" :is-disabled="error" :title="error ? 'Fill in all the fields' : ''" @click="handleFormSubmit") Sign in
  .error(v-if="errMess") {{ errMess }}
</template>

<script>
import { ref, computed, inject } from 'vue'

export default {
  setup () {
    const store = inject('store')
    const form = ref('')
    const name = ref('')
    const pass = ref('')
    const errMess = ref('')
    const error = computed(() => {
      if (name.value !== '' && pass.value !== '' && pass.value.length >= 8) return false
      else return true
    })

    const handleFormSubmit = () => {
      if (name.value !== 'talenom' && pass.value !== 'talenomteam') errMess.value = 'Wrong login or password'
      else {
        localStorage.setItem('admin_token', '172ea3fd34993c3710576456ba2c6987wae24ffecs')
        store.modalQueue.adminToken = '172ea3fd34993c3710576456ba2c6987wae24ffecs'
        store.modalQueue.removeAll()
      }
    }

    return { form, name, pass, error, errMess, handleFormSubmit }
  }
}
</script>

<style lang="sass" scoped>
.signinForm
  display: flex
  flex-direction: column
  > *:not(:last-child)
    margin-bottom: 12*$u
.error
  color: $burntSienna
</style>
