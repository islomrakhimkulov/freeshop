import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
import { auth } from "@/plugins/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [],
        cartProducts: [],
        currentProduct: {},
        user: null,
    },
    getters: {
       getAllProducts: state => state.products,
       getProductsInCart: state => state.cartProducts,
       isUserLogined: state => state.user !== null,
    },
    mutations: {
        GET_DATA(state, newData) {
            state.products = newData;
        },
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