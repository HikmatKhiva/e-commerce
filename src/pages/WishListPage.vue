<template>
  <section class="py-20">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <h2 class="text-xl font-poppins">Wishlist ({{ 4 }})</h2>
        <router-link
          to="/"
          class="font-poppins font-medium border py-4 px-12 border-black inline-block rounded"
          >Move All To Bag</router-link
        >
      </div>
      <div class="flex justify-between mt-[60px]">
        <WishCard v-for="item in 4" :key="item" />
      </div>
    </div>
  </section>
  <RecommendedSection />
</template>

<script setup>
import RecommendedSection from "../sections/RecommendedSection.vue";
import WishCard from "../components/WishCard.vue";
</script>
