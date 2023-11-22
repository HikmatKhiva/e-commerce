<template>
  <section class="py-5">
    <div class="container mx-auto">
      <div class="flex gap-3 items-center">
        <div class="bg-[#DB4444] w-5 h-8 rounded-md"></div>
        <div class="text-[#DB4444] font-semibold items-center">
          <p>Featured</p>
        </div>
      </div>
      <!-- Top -->
      <div class="flex gap-20 justify-between">
        <div class="flex gap-20">
          <h2 class="text-4xl mt-3 font-inter">Flash Sales</h2>
          <FlashTimer />
        </div>
        <div class="flex gap-2 mt-4">
          <button
            type="button"
            class="bg-[#F5F5F5] w-8 h-8 rounded-full grid place-items-center"
          >
            <Icon icon="mingcute:arrow-left-line" />
          </button>
          <button
            type="button"
            class="bg-[#F5F5F5] w-8 h-8 rounded-full grid place-items-center"
          >
            <Icon icon="mingcute:arrow-right-line" />
          </button>
        </div>
      </div>
      <!-- Body -->
      <div class="mt-5">
        <swiper
          :slidesPerView="5"
          :spaceBetween="30"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper flex gap-8"
        >
          <swiper-slide v-for="item in 10" :key="item">
            <FlashCard />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import FlashTimer from "../components/FlashTimer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import FlashCard from "../components/FlashCard.vue";
</script>
