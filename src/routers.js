import { createWebHistory, createRouter } from "vue-router"
import LoginComponent from './components/LoginComponent.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  {
    path: "/",
    name: "LoginComponent",
    component: LoginComponent,
  },
  {
    path: "/apidata",
    name: "HelloWorld",
    component: HelloWorld,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router