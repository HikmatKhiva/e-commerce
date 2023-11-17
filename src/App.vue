<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
import Arrival from "./sections/arrival.vue"
export default {
  components: {
    Header,
    Footer,
    Arrival
  },
};
</script>

<template>
  <Header />
  <div>
    <h2>App Vue</h2>
  </div>
  <Arrival/>
  <Footer />
</template>
