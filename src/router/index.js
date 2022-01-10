import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import NotFound from '../components/error-pages/NotFound.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyAssDtKfEhl0YIOnhZeGQ4Nlgu5WadoefU",
  authDomain: "freeshop-6c9e1.firebaseapp.com",
  projectId: "freeshop-6c9e1",
  storageBucket: "freeshop-6c9e1.appspot.com",
  messagingSenderId: "260074984131",
  appId: "1:260074984131:web:4b4757adcf1541157c4876",
  measurementId: "G-WGKK6HERJN"
};
const app = initializeApp(firebaseConfig);
export {app}

firebase.initializeApp(firebaseConfig);




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
     requestAuth: true 
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */'../views/About.vue'),
    meta: {
      requestAuth: true 
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */'../views/Category.vue'),
    meta: {
      requestAuth: true 
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */'../views/Help.vue'),
    props: true,
    meta: {
      requestAuth: true 
    }
  },
  {
    path: '/popupcart',
    name: 'PopupCart',
    component: () => import('../views/PopupCart.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CartCheckout.vue'),
  },
  {
    path: '/product/:id',
    name: 'ProductItemDetail',
    component: () => import('../views/ProductItemDetail.vue'),
    props: true,
    meta: {
      requestAuth: true 
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)', redirect:'404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  const requireAuth = to.matched.some(record => record.meta.requestAuth);
  const isAuthenticated =firebase.auth().currentUser;
    if(requireAuth && ! isAuthenticated) {
      next("/login");
    }
    else { 
      next();
    }
})

export default router
