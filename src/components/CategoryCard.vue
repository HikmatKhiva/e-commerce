<template>
  <figure class="border grid font-poppins rounded category-card transition-all duration-300 place-items-center p-10">
    <img class="w-14" :src="category.img" :alt="category.title" />
    <figcaption>
      <h3 class="mt-2 font-medium">{{ category.title }}</h3>
    </figcaption>
  </figure>
</template>
<script setup>
defineProps(["category"]);
</script>
