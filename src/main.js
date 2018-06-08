import 'babel-polyfill'
import Vue from 'vue'
import VueFetch, { $fetch } from './plugins/fetch'
import App from './components/App.vue'
import router from './router'
import * as filters from './filters'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueGoogleMaps from 'vue-googlemaps'

//Integrate the router into the store
sync(store, router)

//Filters
for (const key in filters) {
    Vue.filter(key, filters[key])
}

Vue.use(VueFetch, {
    baseUrl: 'http://localhost:3000/'
})

Vue.use(VueGoogleMaps, {
    load: {
        apiKey: 'AIzaSyDqhLEnV-SQ7-AKg_tQiMTsTmjVM3SUAqI',
        libraries: ['places']
    }
})

async function main() {
    await store.dispatch('init')
    new Vue({
        el: '#app',
        ...App,
        router,
        store
    })
}

main()