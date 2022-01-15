<template>
    <div class="popup_wrapper" ref="popup_wrapper">
        <div class="box">
            <span v-if="!hasProduct()">Savatcha bo'sh :</span>
            <div v-for="(product, index) in getProductsInCart"  :key="index" class="box-item">
                <img :src="product.images" alt="" class="item-thumb">
                <h3 class="item-name">{{ product.name }}</h3>
                <span class="item-amount">Miqdor: 1</span>
                <span class="item-price">${{ product.price }}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center" v-if="hasProduct()">
                <span>Jami:$ {{ totalPrice()}}</span>
                <router-link to="/checkout">
                    <button  class="btn btnColor" @click="showPopupCart">Buyurtmalar</button>
                </router-link>
            </div>
        </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'PopupCart',
    computed: {
        ...mapGetters([
            'getProductsInCart'
        ]),
    },
    data: () => ({}),
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
        },
        closePopup(){
          this.$emit('closePopup')
        }

    },
    mounted(){
      let vm = this;
      document.addEventListener('click', function (item){
        if(item.target === vm.$refs['popup_wrapper']) {
          vm.closePopup()
        }
      })
    }
}
</script>
<style>
.popup_wrapper{
  position: absolute;
  right: 0;
  top:0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
}
    .box {
    width: 400px;
    height: auto;
    background-color: #FAFAFA;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1em .5em;
    position: fixed;
    z-index: 1;
  }

  .box:after {
    content: '';
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    background: inherit;
    position: absolute;
    top: -15px;
    right: 15px;
  }

  .box-item {
    width: 100%;
    height: 130px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 0 .5em;
    margin-top: .3em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .item-thumb {
    max-width: 70%;
    grid-column: 1/2;
    grid-row: 1/4;
    align-self: center;
  }

  .item-name {
    grid-column: 2/4;
    grid-row: 1/2;
    font-weight: normal;
  }

  .item-amount {
    grid-column: 2/3;
    grid-row: 2/4;
    color: #ddd;
  }

  
</style>