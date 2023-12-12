<script setup>
import { RegisterBg } from "../../assets";
</script>
<template>
  <section id="register">
    <div class="w-[1300px] mr-auto 2xl:mx-auto flex items-center gap-x-28">
      <img :src="RegisterBg" alt="RegisterBg" />
      <div>
        <h2 class="text-4xl font-inter">Log in to Exclusive</h2>
        <span class="font-poppins inline-block mt-3"
          >Enter your details below</span
        >
        <form class="flex flex-col mt-12 gap-y-10">
          <input
            type="text"
            class="border-b py-2 border-[#bfbfbf] outline-none"
            placeholder="Email or Phone Number"
          />
          <input
            type="text"
            class="border-b py-2 border-[#bfbfbf] outline-none"
            placeholder="Password"
          />
          <div class="flex justify-between items-center">
            <button class="py-4 px-12 bg-[#DB4444] rounded text-white" type="submit">
              Log in
            </button>
            <router-link class="text-[#DB4444]" to="/">Forget Password?</router-link>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
