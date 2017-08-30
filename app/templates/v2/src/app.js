/**
 * @file entry
 * @author mayako(freedom21126@gmail.com)
 */

import Vue from 'vue';
import Vuetify from 'vuetify';
import {createRouter} from './router';
import store from './store';
import App from './App.vue';
import VueResource from 'vue-resource'
import 'muiv3/dist/js/mui.js'
import '../static/css/mui.min.css'
import '../static/css/iconfont.css'
import Icon from 'vue-awesome/components/Icon.vue';

Vue.use(Vuetify);
Vue.use(VueResource)
Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp() {
    let router = createRouter();
    let app = new Vue({
        router,
        store,
        ...App
    });
    return {app, router, store};
}
