<template>
  <section class="py-28">
    <div class="flex justify-evenly">
      <div
        class="text-center font-poppins"
        v-for="service in services"
        :key="service.id"
      >
        <div
          class="w-20 h-20 bg-[#c1c0c1] rounded-[50%] flex justify-center items-center mx-auto"
        >
          <div class="w-14 h-14 bg-black grid place-items-center rounded-[50%]">
            <Icon :icon="service.icon" class="text-white" width="30" />
          </div>
        </div>
        <h2 class="text-lg mt-5 font-medium">{{ service.title }}</h2>
        <p class="text-sm">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { services } from "../config";
</script>
