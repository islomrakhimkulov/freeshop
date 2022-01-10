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
import Header from "./Header.vue";
import Shown from "./Shown.vue";
import Offer from "./Offer.vue";
import HomeCategory from "./HomeCategory.vue";
import ProductsList from "./ProductsList.vue";
import EmailContactVue from "./EmailContact.vue";
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




