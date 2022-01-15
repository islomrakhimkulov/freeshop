<template>
    <div class="checkout-box">
        <ul class="checkout-list">
            <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
                <img :src="product.images" alt="" class="product-image">
                <h3 class="product-name">{{ product.name }}</h3>
                <span class="product-price">$ {{ product.price.toFixed(2) }} </span>
                <button class="product-remove" @click="remove(index)">
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        </ul>
        <div v-if="!hasProduct()" class="checkout-message">
            <h3>Savach bo'sh..</h3>
            <button class="btn btnColor">
                <router-link to="./">Ortga qaytish</router-link>
            </button>
        </div>
        <h3 v-if="hasProduct()" class="total">
            Jami: ${{ totalPrice() }}
        </h3>
    </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    name: 'CartCheckout',
    data: () => ({}),                                                                                                                   
    computed: {
        ...mapGetters([
            'getProductsInCart'
        ]),
    },
    methods: {
        ...mapActions(['removeProduct']),
        hasProduct() {
            return this.getProductsInCart.length > 0;
        },
        totalPrice() {
            return this.getProductsInCart.reduce((current,next) => 
                current + next.price, 0);
        },
        remove(index) {
            this.removeProduct(index);
        }
    },
}
</script>
<style scoped>
.checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-product * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    width: 50%;
  } 
  h3 {
      text-align: center;
  }
  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: var(--mainColor);
    cursor: pointer;
  }

  .total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
  }

  .checkout-message {
    font-size: 1.5em;
  }
</style>
