<template>
  <section class="py-10">
    <div class="container mx-auto flex flex-col">
      <SectionTopTitle title="Today’s" />
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
            @click="handleNext"
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
          :autoplay="{ delay: 3000 }"
          :pagination="{
            clickable: true,
          }"
          :modules="[Autoplay]"
          class="mySwiper flex gap-8"
        >
          <swiper-slide v-for="item in 10" :key="item">
            <FlashCard />
          </swiper-slide>
        </swiper>
      </div>
      <button
        class="bg-[#DB4444] mt-7 text-white py-3 px-5 rounded w-[200px] mx-auto font-poppins"
      >
        View All Products
      </button>
    </div>
  </section>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import FlashTimer from "../components/FlashTimer.vue";
import SectionTopTitle from "../components/SectionTopTitle.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import FlashCard from "../components/FlashCard.vue";
</script>
