import { createRouter, createWebHashHistory } from "vue-router";
import CanvasTime from '../pages/canvas-time'
import SvgLight from '../pages/svg-light'

const routes = [
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
]


export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
