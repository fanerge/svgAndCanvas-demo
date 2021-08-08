import { createRouter, createWebHashHistory } from "vue-router";

const CanvasTime = () => import("@/pages/canvas-time.vue")
const SvgLight = () => import("@/pages/svg-light.vue")
const SvgSpring = () => import("@/pages/svg-spring.vue")

const Home = () => import("@/pages/Home.vue")


const routes = [
  { path: "/", redirect: '/home' },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/CanvasTime",
    name: "CanvasTime",
    component: CanvasTime
  },
  {
    path: "/SvgLight",
    name: "SvgLight",
    component: SvgLight
  },
  {
    path: "/SvgSpring",
    name: "SvgSpring",
    component: SvgSpring
  }
]


export default createRouter({
  history: createWebHashHistory(),
  routes: routes
})
