<template>
    <div>
        <div v-for="item in oneProduct" :key="item.id">
            {{ item.name }}
        </div>
        <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div>
                        <img class="mx-md-auto" :src="oneProduct[0].images" alt="">
                    </div>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="card-feature">  
                        <div class="card-body">
                            <h3 class="product-item-title py-2">Voyage Yoga Bag</h3>
                            <div class="d-flex align-items-center py-2">
                                <span class="product-item-price me-2 py-3">${{oneProduct[0].price.toFixed(2) }}</span>
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
                                    <button class="btn calcBtn calcDecrementBtn" @click="decrement(dec)">-</button>
                                    <button class="btn calcQuantity">{{ quantity }}</button>
                                    <button class=" btn calcBtn calcIncrementBtn" @click="increment()">+</button>
                                </div>
                                <div>
                                    <h3>Total:{{ total }}</h3>
                                </div>
                            </div>
                            <div class="addToCard py-4">                            
                                <div class="d-flex">
                                    <button class="btn text-uppercase addToCardBtn" @click="addProductToCart(oneProduct[0])">
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
</template>
<script>
export default {
    name: 'oneProduct',
    data: () => ({}),
    computed: {
        oneProduct() {
            return this.$store.state.products
        }
    }
}
</script>

<style scoped> 

</style>