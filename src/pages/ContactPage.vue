<script setup>
import { Icon } from "@iconify/vue";
import { contact } from "../config";
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="flex justify-start gap-x-2 py-10">
        <router-link class="text-[#808080]" to="/">Home</router-link>
        <span class="text-[#808080]">/</span>
        <p>Contact</p>
      </div>
      <div class="flex mt-20 gap-x-[30px]">
        <!-- Left Side-->
        <div class="w-[270px]">
          <div class="">
            <div class="flex gap-x-4 items-center">
              <div
                class="bg-[#DB4444] w-10 h-10 grid place-items-center rounded-full"
              >
                <Icon icon="ph:phone-thin" class="text-2xl text-white" />
              </div>
              <h3>Call To Us</h3>
            </div>
            <div class="my-8 flex flex-col gap-y-4 font-poppins">
              <p class="text-sm">We are available 24/7, 7 days a week.</p>
              <p class="text-sm">Phone: {{ contact.phone }}</p>
            </div>
          </div>
          <hr class="my-8" />
          <div class="mb-5">
            <div class="flex gap-x-4 items-center">
              <div
                class="bg-[#DB4444] w-10 h-10 grid place-items-center rounded-full"
              >
                <Icon icon="circum:mail" class="text-2xl text-white" />
              </div>
              <h3>Write To US</h3>
            </div>
            <div class="my-8 flex flex-col gap-y-4 font-poppins">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p class="text-sm">Emails: {{ contact.emailCustomers }}</p>
              <p class="text-sm">Emails: {{ contact.emailSupport }}</p>
            </div>
          </div>
        </div>
        <!-- Form Side -->
        <form class="flex-grow">
          <div class="flex gap-x-4 mb-8">
            <input
              type="text"
              class="outline-none p-2 flex-grow"
              placeholder="Your Name *"
            />
            <input
              type="text"
              class="outline-none p-2 flex-grow"
              placeholder="Your Email *"
            />
            <input
              type="text"
              class="outline-none p-2 flex-grow"
              placeholder="Your Phone *"
            />
          </div>
          <textarea
            class="w-full outline-none p-3 resize-none"
            cols="30"
            placeholder="Your Massage"
            rows="10"
          ></textarea>
        </form>
      </div>
    </div>
  </section>
</template>
