// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import PPP from './VuePPP'
import Ptn from './components/Ptn'; 
import VueHighlightJS from 'vue-highlightjs'


Vue.config.productionTip = false

Vue.component('ptn', Ptn); 

Vue.use(PPP, {
	router
}); 
Vue.use(VueHighlightJS)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
