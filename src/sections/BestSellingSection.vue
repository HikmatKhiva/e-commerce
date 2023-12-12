<template>
  <section class="py-10">
    <div class="container mx-auto">
      <div class="flex justify-between items-end">
        <div class="flex-grow">
          <SectionTopTitle title="This Month" />
          <h2 class="text-4xl mt-3 font-inter">Best Selling Products</h2>
        </div>
        <a href="" class="bg-[#DB4444] mt-7 text-white py-3 px-12 rounded  mx-auto font-poppins inline-block">View All</a>
      </div>

      <div class="flex mt-10 justify-between">
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTopTitle from "../components/SectionTopTitle.vue";
import FlashCard from "../components/FlashCard.vue";
</script>