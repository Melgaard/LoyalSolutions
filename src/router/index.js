import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/da',
	},
	{
		path: '/:lang',
		name: 'Home',
		component: Home
	},
	{
		path: '/:lang/members',
		name: 'Members',
		component: () => import(/* webpackChunkName: "about" */ '@/views/Members.vue')
	},
	{
		path: '/:lang/signup',
		name: 'Signup',
		component: () => import(/* webpackChunkName: "about" */ '@/views/Signup.vue')
	},
	{
		path: '/:lang/shop',
		name: 'Shop',
		component: () => import(/* webpackChunkName: "about" */ '@/views/Shop.vue')
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
