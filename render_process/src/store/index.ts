import { createPinia } from 'pinia';
import piniaPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPersistedstate);

export { };
export default pinia;