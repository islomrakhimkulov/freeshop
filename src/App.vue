<template>
  <div id="app">
      <Navbar />
      <router-view/>
      <Footer />
      <FooterBottom /> 
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import FooterBottom from "./components/FooterBottom.vue";


export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    FooterBottom
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden !important;
} 
body {
  font-family: 'Poppins', sans-serif;
}
a {
  text-decoration: none !important;
} 
.btn:focus {
  outline: none !important;
  box-shadow: none !important;
}
ul {
  list-style: none;
}
:root {
  --mainColor: #FF1850;
  --whiteColor: #fff;
  --ratingColor: #FF9600;
}
.mainColor {
  color: var(--mainColor);
}
.whiteColor {
    color: var(--whiteColor) !important;
}
.ratingColor {
  color: var(--ratingColor);
}
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background-color: var(--mainColor);
}
::-webkit-scrollbar-thumb {
    background-color: var(--whiteColor);
    border-radius: 50px;
}
</style>
