import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ClassesPage from '../views/ClassesPage.vue'
import SchedulePage from '../views/SchedulePage.vue'
import ContactPage from '../views/ContactPage.vue'
import FacilitiesPage from '../views/FacilitiesPage.vue'
import CurriculumPage from '../views/CurriculumPage.vue'
import KidsWrestlingPlan from '../views/KidsWrestlingPlan.vue'
import BJJPlan from '../views/BJJPlan.vue'
import JudoPlan from '../views/JudoPlan.vue'
import SubmissionGrapplingPlan from '../views/SubmissionGrapplingPlan.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/classes',
    name: 'ClassesPage',
    component: ClassesPage
  },
  {
    path: '/schedule',
    name: 'SchedulePage',
    component: SchedulePage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/facilities',
    name: 'FacilitiesPage',
    component: FacilitiesPage
  },
  {
    path: '/curriculum',
    name: 'CurriculumPage',
    component: CurriculumPage
  },
  {
    path: '/curriculum/kids-wrestling',
    name: 'KidsWrestlingPlan',
    component: KidsWrestlingPlan
  },
  {
    path: '/curriculum/bjj',
    name: 'BJJPlan',
    component: BJJPlan
  },
  {
    path: '/curriculum/judo',
    name: 'JudoPlan',
    component: JudoPlan
  },
  {
    path: '/curriculum/submission-grappling',
    name: 'SubmissionGrapplingPlan',
    component: SubmissionGrapplingPlan
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
