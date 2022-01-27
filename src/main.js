import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
/* import { setupI18n } from './i18n.js' */
/* import messages from '@intlify/vite-plugin-vue-i18n/messages' */

/* const i18n = setupI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
  })  */

createApp(App)
/* .use(i18n) */
.mount('#app')