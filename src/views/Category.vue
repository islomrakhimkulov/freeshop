<template>
        <div class="container">
            <h5>Category</h5>
        <div class="row">
            <div class="col-md-3" v-for="product in getAllProducts" :key="product.id">
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
                                :padding="1"
                            />
                        </div>
                    </div>  
                </div>
                <div class="card-feature-details">
                    <div class="d-flex flex-column">
                        <button>
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
            </div>
        </div>
        <!-- <ProductsList :product="getAllProducts"/> -->
        </div>
</template>
<script>
// import ProductsList from '../views/ProductsList.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'Help',
    components: {
        // ProductsList
    },
    computed: {
        ...mapGetters([
            'getAllProducts'
        ])
    },
    props: {
        product: {
            type: Object,
            default: () => ({})
        }
    },
}
</script>

<style>

</style>
