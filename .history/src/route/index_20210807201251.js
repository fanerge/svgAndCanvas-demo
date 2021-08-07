import { createRouter, createWebHashHistory } from "vue-router";
import CanvasTime from '/pages/canvas-time.vue'
import SvgLight from '/pages/svg-light.vue'

const routes = [
  {
    path: "/CanvasTime",
    name: "CanvasTime",
    component: CanvasTime
  },
  {
    path: "/SvgLight",
    name: "SvgLight",
    component: SvgLight
  }
]


export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
