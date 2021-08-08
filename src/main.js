import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { init } from './i18n'

Vue.config.productionTip = false

init().then((i18n) => {
	new Vue({
		router,
		i18n,
		render: h => h(App)
	}).$mount('#app')
})

