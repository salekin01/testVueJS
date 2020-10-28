import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GeneralReg from '../views/GeneralReg.vue'
import BlogSingle from "../components/BlogSingle";
import BlogRead from "../views/BlogRead";
import EditorComponent from "../components/EditorComponent";
import MeetTeam from "../views/MeetTeam";
import AboutUs from "../views/AboutUs";
import BlogManagement from "../views/BlogManagement";
import Contact from "../views/Contact";
import Event from "../views/Event";
import Workshop from "../views/Workshop";
import Project from "../views/Project";
import Live from "../views/Live";
import BlogAll from "../components/BlogAll";
import PrayerReg from "../components/PrayerReg";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog-single',
    name: 'Editor',
    component: BlogSingle
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/meet-us',
    name: 'MeetTeam',
    component: MeetTeam
  },
  {
    path: '/blog-read/:id',
    name: 'BlogRead',
    component: BlogRead
  },
  {
    path: '/blog-all/:id',
    name: 'BlogAll',
    component: BlogAll
  },
  {
    path: '/blog-editor',
    name: 'BlogEditor',
    component: EditorComponent
  },
  {
    path: '/blog-management',
    name: 'BlogManagement',
    component: BlogManagement
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/workshop',
    name: 'Workshop',
    component: Workshop
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/live',
    name: 'Live',
    component: Live
  },

  {
    path: '/generalReg',
    name: 'GeneralReg',
    component: GeneralReg
  },
  {
    path: '/prayerReg',
    name: 'PrayerReg',
    component: PrayerReg
  },
  {
    path: '/blog/:categoryId',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
