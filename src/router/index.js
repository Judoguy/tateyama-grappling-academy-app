import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/about/matthew-moser',
    name: 'MatthewMoserBio',
    component: () => import('../views/MatthewMoserBio.vue')
  },
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/classes',
    name: 'ClassesPage',
    component: () => import('../views/ClassesPage.vue')
  },
  {
    path: '/schedule',
    name: 'SchedulePage',
    component: () => import('../views/SchedulePage.vue')
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: () => import('../views/ContactPage.vue')
  },
  {
    path: '/facilities',
    name: 'FacilitiesPage',
    component: () => import('../views/FacilitiesPage.vue')
  },
  {
    path: '/curriculum',
    name: 'CurriculumPage',
    component: () => import('../views/CurriculumPage.vue')
  },
  {
    path: '/curriculum/kids-wrestling',
    name: 'KidsWrestlingPlan',
    component: () => import('../views/KidsWrestlingPlan.vue')
  },
  {
    path: '/curriculum/bjj',
    name: 'BJJPlan',
    component: () => import('../views/BJJPlan.vue')
  },
  {
    path: '/curriculum/judo',
    name: 'JudoPlan',
    component: () => import('../views/JudoPlan.vue')
  },
  {
    path: '/curriculum/submission-grappling',
    name: 'SubmissionGrapplingPlan',
    component: () => import('../views/SubmissionGrapplingPlan.vue')
  },
  // Catch all unmatched routes
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  /* eslint-disable no-unused-vars */
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  /* eslint-enable no-unused-vars */
})

export default router
