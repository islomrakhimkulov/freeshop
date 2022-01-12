import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
// import firebase, { getAuth } from 'firebase/auth';

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
        showModal: false,
        showPopupCart: false,
        user: null,
    },
    getters: {
       getAllProducts: state => state.products,
       getProductsInCart: state => state.cartProducts,
       getCurrentProduct: state => state.currentProduct,
       getShowModal: state => state.showModal,
       getPopupCart: state => state.showPopupCart,
       getShowLoginButton: state => state.showLoginButton,
       getShowLogOutButton: state => state.showLogOutButton,
       isLogined: state => state.user !== null,
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
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
        },
        SHOW_LOGIN_BUTTON: (state) => {
            state.showLoginButton = !state.showLoginButton;
        },
        SHOW_LOGOUT_BUTTON: (state) => {
            state.showLogOutButton = !state.showLogOutButton;
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
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
        showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
        },
        showLoginButton: (context) => {
            context.commit('SHOW_LOGIN_BUTTON');
        },
        showLogOutButton: (context ) => {
            context.commit('SHOW_LOGOUT_BUTTON');
        },
        // login: ( {context}, username, password ) => {
        //     const auth = getAuth();
        //     await signInWithEmailAndPassword(auth,this.email,this.password);
        // }

    }
})
