<template>
  <figure class="font-poppins">
    <div
      class="relative bg-[#F5F5F5] rounded w-full flex justify-center items-center min-h-[250px]"
    >
      <!-- Discount -->
      <p class="absolute text-white text-xs px-2 py-1 rounded top-5 left-5 bg-[#DB4444]">-40%</p>
      <!-- Buttons -->
      <div class="absolute top-2 flex flex-col gap-y-2 right-2">
        <button
          type="button"
          class="w-[24px] h-[24px] bg-white grid place-items-center rounded-full"
        >
          <Icon width="18" icon="ph:heart" />
        </button>
        <button
          type="button"
          class="w-[24px] h-[24px] bg-white grid place-items-center rounded-full"
        >
          <Icon width="18" icon="ph:eye-light" />
        </button>
      </div>
      <img class="w-[170px] h-[150px]" :src="gamer" alt="gamer" />
    </div>
    <figcaption class="mt-2">
      <h3 class="font-medium">HAVIT HV-G92 Gamepad</h3>
      <!-- Prices -->
      <div class="flex gap-2">
        <p class="text-[#DB4444]">$120</p>
        <p class="line-through opacity-70">$160</p>
      </div>
      <!-- rate -->
      <div class="flex mt-1 items-center">
        <Icon
          class="text-yellow-500"
          v-for="rate in 5"
          :key="rate"
          icon="ic:round-star"
        />
        <p class="text-xs">(88)</p>
      </div>
    </figcaption>
  </figure>
</template>
<script setup>
import { gamer } from "../assets";
import { Icon } from "@iconify/vue";
</script>