<template>
  <figure class="relative w-[270px]">
    <img :src="gamer" alt="gamer recommended" class="w-[170px] my-10 mx-auto" />
    <router-link class="absolute top-4 right-4" to="/">
      <Icon icon="ph:eye-thin" class="text-2xl" />
    </router-link>
    <!-- Discount -->
    <p class="bg-[#DB4444] font-sm px-3 py-1 absolute text-white top-4 rounded">
      30%
    </p>
    <button
      class="flex w-full py-3 mt-2 justify-center gap-x-1 items-center bg-black rounded-b"
      type="button"
    >
      <Icon icon="mdi-light:cart" class="text-white text-2xl" />
      <span class="text-sm font-poppins text-white">Add To Cart</span>
    </button>
    <figcaption class="font-poppins py-2 mt-2">
      <h3 class="font-medium">ASUS FHD Gaming Laptop</h3>
      <!-- Prices -->
      <div class="flex gap-2 my-2">
        <p class="text-[#DB4444]">$120</p>
        <p class="line-through opacity-70">$160</p>
      </div>
      <!-- rate -->
      <div class="flex items-center">
        <Icon
          class="text-yellow-500 text-xl"
          v-for="rate in 5"
          :key="rate"
          icon="ic:round-star"
        />
        <p class="text-sm ml-2">(88)</p>
      </div>
    </figcaption>
  </figure>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { gamer } from "../assets";
</script>
