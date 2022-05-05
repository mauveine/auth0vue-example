import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css'
import router from './router'
import { createPinia } from 'pinia'

import axios from 'axios'
import { createAuth0 } from '@auth0/auth0-vue';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

const app = createApp(App)
// domain: process.env.VUE_APP_AUTH0_DOMAIN,
// client_id: process.env.VUE_APP_AUTH0_CLIENT_ID,
// redirect_uri: process.env.VUE_APP_AUTH0_REDIRECT_URI,

app.component('font-awesome-icon', FontAwesomeIcon);
app
  .use(router)
  .use(
    createAuth0({
        domain: process.env.VUE_APP_AUTH0_DOMAIN,
        client_id: process.env.VUE_APP_AUTH0_CLIENT_ID,
        redirect_uri: process.env.VUE_APP_AUTH0_REDIRECT_URI,
    })
  )
  .use(createPinia())
  .mount('#app')

// TODO: make this environment variable using .env.local.local or similar.
if(process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'https://pecan.lndo.site/api';
} else {
  axios.defaults.baseURL = '/api/';
}

app.config.globalProperties.axios = axios
