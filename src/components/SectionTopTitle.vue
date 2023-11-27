<template>
  <div class="flex gap-3 items-center">
    <div class="bg-[#DB4444] w-5 h-8 rounded-md"></div>
    <div class="text-[#DB4444] font-semibold items-center">
      <p>{{ title }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps(["title"]);
</script>
