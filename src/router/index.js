import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/pizzas',
    children: [
      {
        path: '',
        name: 'Pizzas',
        component: () => import('../views/Pizzas.vue'),
        props: (route) => ({
          searchTerm: route.query?.search || '',
        }),
        beforeEnter(to, from) {
          console.log(`[route beforeEnter] /about  (${from.fullPath} -> ${to.fullPath})`)
          return true
        },
      },
      {
        path: ':id',
        name: 'pizzaDetail',
        props: true,
        component: () => import('../views/PizzaDetail.vue'),
      },
    ],
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    children: [
      {
        path: 'faq',
        name: 'contact-faq',
        component: () => import('../views/ContactFaq.vue'),
      },
      {
        path: 'form',
        name: 'contact-form',
        component: () => import('../views/ContactForm.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('../views/Error.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
