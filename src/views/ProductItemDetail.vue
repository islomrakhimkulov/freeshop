<template>
    <div class="ProductItemDetails">
        <div class="container">
            <div class="py-4">
            <h3 class="text-center">id:{{ this.$route.params.id }}</h3>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div>
                        <img class="mx-md-auto" :src="require('../assets/images/products-list/products-8.png')" alt="">
                    </div>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="card-feature">  
                        <div class="card-body">
                            <h3 class="product-item-title py-2">Voyage Yoga Bag</h3>
                            <div class="d-flex align-items-center py-2">
                                <span class="product-item-price me-2 py-3">${{ price.toFixed(2) }}</span>
                                <div class="star-rating">
                                    <star-rating 
                                        :v-model="rating"
                                        :star-size="20"
                                        :show-rating="false"
                                        :border-width="1"
                                        border-color="#FF9600"
                                        active-border-color="#FF9600"
                                        active-color="#FF9600"
                                        inactive-color="#fff"
                                        :padding="1"
                                    />
                                </div>
                            </div>
                            <p class="product-item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
                            </p>
                            <div class="btnGroup py-3 d-flex align-items-center justify-content-between">
                                <div>
                                    <button @click="decrement(dec)" class="btn calcBtn calcDecrementBtn" >-</button>
                                    <button class="btn calcQuantity">{{ quantity }}</button>
                                    <button @click="increment()" class=" btn calcBtn calcIncrementBtn">+</button>
                                </div>
                                <div>
                                    <h3>Total:{{ total }}</h3>
                                </div>
                            </div>
                            <div class="addToCard py-4">                            
                                <div class="d-flex">
                                    <button @click="addProductToCart(product)" class="btn text-uppercase addToCardBtn">
                                        <i class="fas fa-shopping-cart"></i> Add to card
                                    </button>
                                    <button class="btn calcBtn mx-2">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                    <button class="btn calcBtn">
                                        <i class="fas fa-retweet"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { mapActions } from "vuex";
export default {
    name: "ProductItemDetail",
    components: {
        StarRating
    },
    props: {
        product: {
            type: Object,
            default: () => ({})
        },
    },
    data: () => ({
        quantity: 1,
        price: 250,
        total: null,
    }),
    methods: {
        increment() {
            this.quantity++;
            this.total = this.quantity * this.price;
        },
        decrement() {
            if( this.quantity > 0) {
                this.quantity --;
                this.total = this.total - this.price
            } else {
                return this.quantity
            }
        },
        ...mapActions([
            "addProduct",
            "currentProduct"
        ]),
        addProductToCart(product) {
            this.addProduct(product);
        },
        addCurrentProduct(product) {
            this.currentProduct(product);
        }
    },
    mounted() {
        this.total = this.quantity * this.price
    },
}
</script>

<style >
.product-item-title {
    font-weight: 600;
    font-size: 24px;
    color: #333;
    line-height: 24px;
    margin-block: 0px;
}
.product-item-price {
    font-weight: 500;
    font-size: 24px;
    color: var(--mainColor);
}
.product-item-text {
    font-weight: 400;
    font-size: 18px;
}
.ProductItemDetails .btn {
    padding: 6px 24px;
    border-radius: 0;
    border: 2px solid #ebebeb;   
    font-weight: 400;
}
.addToCardBtn {
    background-color: var(--mainColor);
    border: none !important;
    color: #fff !important;
    border: none;
}
.addToCard .btn {
    color: var(--mainColor);
}
.addToCard .btn:hover {
    background-color: var(--mainColor) !important;
    border: 2px solid var(--mainColor);
    color: #fff;
}
.calcQuantity {
    background-color: #fff;
    font-size: 24px;
}
.calcBtn {
    background-color: #ebebeb !important;
    font-size: 24px;
}
</style>
