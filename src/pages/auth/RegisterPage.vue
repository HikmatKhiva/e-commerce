<script setup>
import { Icon } from "@iconify/vue";
import { RegisterBg } from "../../assets";
</script>

<template>
  <section id="register">
    <div class="w-[1300px] mr-auto 2xl:mx-auto flex items-center gap-x-28">
      <img :src="RegisterBg" alt="RegisterBg" />
      <div>
        <h2 class="text-4xl font-inter">Create an account</h2>
        <span class="font-poppins inline-block mt-3"
          >Enter your details below</span
        >
        <form action="" class="flex flex-col mt-12 gap-y-10">
          <input
            class="border-b py-2 border-[#bfbfbf] outline-none"
            placeholder="Name"
            type="text"
          />
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
          <button class="py-3 bg-[#DB4444] rounded text-white" type="submit">
            Create Account
          </button>
        </form>
        <div>
          <div
            class="border rounded py-4 mt-4 flex justify-center items-center gap-x-2"
          >
            <Icon icon="devicon:google" />
            <span>Sign up with Google</span>
          </div>
          <div class="flex justify-center mt-8 gap-x-4">
            <p>Already have account?</p>
            <router-link to="/login" class="border-b"> Log in </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
