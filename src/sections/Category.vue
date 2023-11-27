<template>
  <section class="py-10">
    <div class="container mx-auto">
      <!-- Top -->
      <SectionTopTitle title="Categories" />
      <div class="flex justify-between">
        <h2 class="text-4xl mt-3 font-inter">Browse By Category</h2>
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
      <!-- body -->
      <div class="flex">
        <swiper
          :slidesPerView="6"
          :spaceBetween="30"
          :autoplay="{ delay: 3000 }"
          :pagination="{
            clickable: true,
          }"
          :modules="[Autoplay]"
          class="mySwiper flex gap-8 mt-10"
        >
          <swiper-slide v-for="category in categories" :key="category.id">
            <CategoryCard :category="category" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import CategoryCard from "../components/CategoryCard.vue";
import SectionTopTitle from "../components/SectionTopTitle.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { categories } from "../config";
</script>
