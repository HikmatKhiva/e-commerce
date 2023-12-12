<template>
  <section class="pb-10">
    <div class="container mx-auto flex">
      <Aside />
      <swiper
        :autoplay="{ delay: 3000 }"
        :pagination="{
          clickable: true,
        }"
        :modules="[Pagination, Autoplay]"
        class="mySwiper w-[calc(100%_-_250px)] flex-grow"
      >
        <swiper-slide class="pt-10 px-10" v-for="item in 10" :key="item">
          <div class="w-full bg-black h-full"></div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import Aside from "../components/Aside.vue";
</script>
