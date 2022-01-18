<template>
    <div class="cart-data py-4">
        <div class="container">
            <div class="row gy-3">
                <div class="col-md-3 col-sm-4" v-for="product in products" :key="product.id">
                    <!-- <router-link to="/product/:id"> -->
                        <div class="card">
                            <div class="card-feature">
                                <img class="card-img-top" :src="product.images" alt="">
                                <div class="card-body">
                                    <h3 class="card-item-title">{{ product.name }}</h3>
                                    <span class="card-item-price">${{ product.price.toFixed(2) }}</span>
                                    <div class="star-rating">
                                        <star-rating 
                                            :rating="product.rating"    
                                            :round-start-rating="false"
                                            v-model="rating"
                                            :star-size="20"
                                            :show-rating="false"
                                            :border-width="1"
                                            border-color="#FF9600"
                                            active-border-color="#FF9600"
                                            active-color="#FF9600"
                                            inactive-color="#fff"
                                            :padding= 1
                                        />
                                    </div>
                                </div>  
                            </div>
                            <div class="card-feature-details">
                                <div class="d-flex flex-column">
                                    <button @click="addProductToCart(product)">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                    <button>
                                        <i class="fas fa-heart"></i>
                                    </button>
                                    <button>
                                        <i class="fas fa-retweet"></i>
                                    </button>
                                </div>
                            </div>         
                        </div>
                    <!-- </router-link> --> 
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import StarRating from 'vue-star-rating'
import { mapGetters, mapActions} from 'vuex'
export default {
    name: 'ProductsList',
    props: {},
    components: {
        StarRating
    },
    computed: {
        rating: {
            get() {
                return this.products.rating;
            },
            set(value) {
                this.$emit("rated", value);
            },
        },
        ...mapGetters({
            products: "getAllProducts",
        }),
        routeTo() {
            return { 
                name: "ProductItemDetail", 
                params: { 
                    id: this.product.id
                } 
            };
        }
    },
    methods: {
        ...mapActions([
            "addProduct",
            "currentProduct",
        ]),
        addProductToCart(product) {
            this.addProduct( product );
        },
        addCurrentProduct(product) {
            this.currentProduct(product);
        }
    }
}
</script>

<style>
.cart-data h2 {
    position: relative;
    font-weight: 500;
    font-size: 30px;
    color: #333;
}
.cart-data h2::before {
    position: absolute;
    top: 50%;
    left: 30px;
    height: 2px;
    width: 100px;
    background: var(--mainColor);
}
.card {
    border: 0px solid rgba(0,0,0,.125) !important;
    transition: all 0.5s ease;
}
.card:hover .card-feature-details {
    display: block;
}
.card:hover {
    box-shadow: 0px 7px 17px rgba(255, 24, 80, 0.4);
}

.card-body {
    padding: 0.5rem 0.5rem;
}
.card-item-title {
    font-weight: 500;
    font-size: 14px;
    color: #333;
    line-height: 24px;
    margin-block: 0px;
}
.card-item-price {
    font-weight: 600;
    font-size: 18px;
    color: var(--mainColor);
}

.card-feature-details {
    position:absolute;
    display: none;
    top: 5px;
    right: 0;
    padding: 5px;
    font-size: 15px;
}
.card-feature-details button {
    border: none;
    background: var(--mainColor);
    color: #fff;
    padding: 5px 6px;
    margin: 5px 0;
}
</style>
