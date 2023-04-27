import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(createPersistedState())
export { store }

export * from './global'
export default store
