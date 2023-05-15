import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Agenda from './views/Agenda.vue'
import Todo from './views/Todo.vue'
import Timer from './views/Timer.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Agenda', component: Agenda },
  { path: '/Todo', component: Todo },
  { path: '/Timer', component: Timer },
]

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
})

const app = createApp(App);

app.use(router)
app.mount('#app')
