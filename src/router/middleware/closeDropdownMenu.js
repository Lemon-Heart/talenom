export default function closeDropdownMenu ({ next, store, nextMiddleware }) {
  store.dropdownMenu.close()
  return nextMiddleware()
}
