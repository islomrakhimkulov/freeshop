<template>
<div>                       
    <div class="navbar-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
                <router-link to="/" class="navbar-brand mainColor">Freeshop</router-link>
                <button class="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" >        
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item active">
                            <router-link to="/">Bosh Sahifa</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/category">Kategoriyalar</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/help">Yordam</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about">Biz Haqimizda</router-link>
                        </li>
                    </ul>
                    <div class="mb-2 mb-lg-0 nav-main-menu d-flex align-items-center justify-content-center me-2">
                        <button class="shopping-button" @click="showPopupCart()">
                            <i class="fas fa-shopping-cart fa-2x px-1 shooping-cart"></i>
                        </button>
                        <span class="total-quantity" v-if="hasProduct()">
                            {{ this.getProductsInCart.length }}
                        </span>
                        <button class="shopping-search" @click="searchIcon()">
                            <i class="fas fa-search mx-3"></i>
                        </button>
                        <template v-if="isUserLogined">
                            <button class="btn btnColor" @click="onLogOutClick">Chiqish</button>
                        </template>
                        <template v-else>
                            <router-link to="/login" custom  v-slot="{ navigate }">
                                <button class="btn btnColor" @click="navigate">Kirish</button>
                            </router-link>
                            <button class="btn btnColor ms-2">
                                <router-link to="/register">Ro'yxatdan o'tish</router-link>
                            </button>
                        </template>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container text-center">
            <input 
                v-if="showInput" 
                type="text"
                class="searchInput"
                autofocus
            >
        </div>
        <PopupCart 
            v-if="popupCart"
            @closePopup="exitpopup"
        />     
    </div>
</div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex';
import PopupCart from "../views/PopupCart.vue";

export default {
    name: "Navbar",
    components: { PopupCart },
    data: () => ({
        showInput: false,
        showLogOutButton: localStorage.getItem('token'),
        showLoginButton: true,
        popupCart:false,
        isUser: '' 
    }),
    computed: {
        ...mapGetters([
            "getProductsInCart",
            "getPopupCart",
            "isUserLogined"
        ])
    },
    methods: {
        ...mapActions(["logOut"]),
        searchIcon() {
            this.showInput = !this.showInput;
        },
        async onLogOutClick() {
            await this.logOut();
            this.$router.push("/login");
        },
        ...mapActions(["showOrHiddenPopupCart"
        ]),
        showPopupCart() {
           this.popupCart = true;
        },
        hasProduct() {
            return this.getProductsInCart.length >=0;
        },
        exitpopup(){
            this.popupCart = false;  
        }
    }
}
</script>

<style>
:root {
  --mainColor: #FF1850;
  --textColor: #333;
}
.mainColor {
  color: var(--mainColor) !important;
}
.btnColor {
    background: var(--mainColor) !important;
    box-shadow: 0px 5px 10px rgba(255, 24, 80, 0.3);
    border-radius: 3px !important;
    color: #fff !important;
    font-size: 14px !important;
}
.btnColor a {
    color: #fff !important;
}
.textColor {
    color: var(--textColor) !important;
}
.navbar-light .navbar-toggler {
    border-color: rgba(0, 0, 0, 0) !important;
}
.navbar-toggler:focus {
    box-shadow: 0 0 0 !important;
}
.navbar a.router-link-exact-active {
  color: #FF1850 !important;
}
.navbar .btn a.router-link-exact-active {
  color: #fff !important;
}
/* .navbar-wrapper nav {
    z-index: 999;
} */
.navbar {
    padding: 20px 0 !important;
}
.navbar-brand {
    padding:  0 50px 0 0;
    margin-left: -24px !important;
    font-weight: 700 !important;
    font-size: 24px !important;
    text-transform: uppercase;
    line-height: 14x;
}
.nav-main-menu {
    position: relative !important;
}
/* searchInput */
.cart {
    position: absolute;
    top: 107px;
    right: -500px;
}
.searchInput {
    max-width: 400px;
    margin: auto;
    width: 100%;
}
.shopping-button {
    border-width: 0px;
    background: inherit;
}
.shopping-search {
    border-width: 0px;
    background: inherit;
}
.total-quantity {
      position: absolute !important;
      right: 110px;
      top: -7px;
      background: var(--mainColor);
      border-radius: 50%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      width: 20px;
      padding: 0.5rem;   
}
.navbar-collapse ul {
    list-style-type: disc;
    color: var(--mainColor);
}
.navbar-collapse ul li {
    display: inline-block;
    padding: 0 15px;
    text-transform: uppercase;
}
.navbar-collapse ul li a {
    text-decoration: none;
    color: var(--textColor);
    font-weight: 500;
    font-size: 14px ;
    transition: all 0.125s;
}
.navbar-nav .nav-item>a:hover {
    color: var(--mainColor)!important;
}
/* .main-btn {
    background: var(--mainColor);
    color: #fff;
    border-width: 0px;
    box-shadow: 0px 5px 10px rgba(255, 24, 80, 0.3);
    border-radius: 3px  !important;
    padding: 9.5px 15px;
} */
@media (min-width:992px) and (max-width:1220px)  {
    .cart {
        left: 300px;
        right: auto;
    }
}

@media (min-width:769px) and (max-width:991px) {
    .navbar-brand {
        margin-left: 15px !important;
    }
    .cart {
        left: 250px;
        right: auto;
    }
    .total-quantity {
        position: absolute !important;
        left: 290px;
        top: -5px;
    }
}

@media only screen and (max-width: 768px) {
    .navbar-brand {
        margin-left: 12px !important;
    }
    .nav-main-menu {
    position: relative !important;
    }
    .total-quantity {
        right: 285px;
        top: -5px;
    }
    .cart {
        left: 50px;
        right: auto;
    }
    .card-feature-details {
        display: block;
    }
}
@media (min-width: 490px) and (max-width: 520px) {
    .total-quantity {
        right: 270px;
    }
}
</style>