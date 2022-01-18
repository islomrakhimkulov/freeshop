import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
import { auth } from "@/plugins/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {
                id: 1,
                name: 'nmadir-1',
                price: 250,
                rating: 4,
                images: ['images/products-list/products-1.png'] 
            },
            {
                id: 2,
                name: '2-title',
                price: 200,
                rating: 4,
                images: ['images/products-list/products-2.png'] 
            },
            {
                id: 3,
                name: '3-bu',
                price: 400,
                rating: 2,
                images: ['images/products-list/products-3.png'] 
            },
            {
                id: 4,
                name: '5-bu',
                price: 300,
                rating: 4,
                images: ['images/products-list/products-4.png'] 
            },
            {
                id: 5,
                name: 'title-2',
                price: 250,
                rating: 1,
                images: ['images/products-list/products-5.png'] 
            },
            {
                id: 6,
                name: '6-bu',
                price: 280,
                rating: 3,
                images: ['images/products-list/products-6.png'] 
            },
            {
                id: 7,
                name: '7-dadir',
                price: 220,
                rating: 4,
                images: ['images/products-list/products-7.png'] 
            },
            {
                id: 8,
                name: '8-sarlavhadir',
                price: 250,
                rating: 4,
                images: ['images/products-list/products-8.png'] 
            },    
        ],
        cartProducts: [],
        currentProduct: {},
        user: null,
        btn : true
    },
    getters: {
       getAllProducts: state => state.products,
       getProductsInCart: state => state.cartProducts,
       getCurrentProduct: state => state.currentProduct,
       isUserLogined: state => state.user !== null,
    },
    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.cartProducts.push( product );
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index,1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        btn(state,value){
            state.btn = value
        },
    },
    actions: {
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: (context, product) => {
            context.commit('REMOVE_PRODUCT', product);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
        async login({ commit }, { email, password }) {
            const firebaseUserCredentials = await signInWithEmailAndPassword(auth, email, password);
            commit("SET_USER", firebaseUserCredentials.user);
        },
        async logOut({ commit }) {
            await signOut(auth);
            commit("SET_USER", null);
        }
    }
})