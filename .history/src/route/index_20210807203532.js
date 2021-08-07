import { createRouter, createWebHashHistory } from "vue-router";

const CanvasTime = () => import("../pages/canvas-time.vue")
const SvgLight = () => import("../pages/svg-light.vue")

const routes = [
  { path: "/", redirect: '/home' },
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


export default createRouter({
  history: createWebHashHistory(),
  routes: routes
})
