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
import 'vue-star-rating'
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
  
}
</script>

<style>
</style>




