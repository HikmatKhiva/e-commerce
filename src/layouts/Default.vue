<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow flex flex-col">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
