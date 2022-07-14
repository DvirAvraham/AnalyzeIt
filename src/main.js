import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/styles.scss';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

library.add(faPhone);

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
