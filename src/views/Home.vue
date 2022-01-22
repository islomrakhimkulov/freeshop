<template>
  <div class="home">
    <Header />
    <Shown />
    <Offer />
    <HomeCategory />
    <ProductsList />
    <EmailContactVue /> 
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Shown from "../components/Shown.vue";
import Offer from "../components/Offer.vue";
import HomeCategory from "../components/HomeCategory.vue";
import ProductsList from "../components/ProductsList.vue";
import EmailContactVue from "../components/EmailContact.vue";
import 'vue-star-rating';
import axios from "axios";
export default {
  name: 'Home',
  components: {
    Header,
    Shown,
    Offer,
    HomeCategory,
    ProductsList,
    EmailContactVue, 
  },
  data: () => ({
    products: [],
  }),
  async mounted() {
        const BASE_URL = 'http://localhost:3004/products';
       
        try {
            let res = await axios(BASE_URL);
            const data = await res.data;
            this.products = data;
            this.$store.commit("GET_DATA",this.products);
        } catch (err) {
            console.log(err);
        }
    },
  
}
</script>

<style>
</style>




