<template>
  <section class="py-20">
    <div class="container mx-auto">
      <div class="flex justify-between items-start">
        <SectionTopTitle title="Just For You" />
        <router-link
          to="/"
          class="font-poppins font-medium border py-4 px-12 border-black inline-block rounded"
          >See All</router-link
        >
      </div>
      <div class="flex justify-between mt-[60px]">
        <RecommendedCard v-for="item in 4" :key="item" />
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionTopTitle from "../components/SectionTopTitle.vue";
import RecommendedCard from "../components/RecommendedCard.vue";
</script>
