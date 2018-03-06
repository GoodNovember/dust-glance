import Vue from 'vue/dist/vue.js'
import App from './app.vue'

const app = window.addEventListener('load', () => {
	new Vue({
		el:"#app",
		name: App,
		components: { App },
		template: '<App />'
	})
})

export default app