<template>
  <footer class="bg-black text-white">
    <div class="container mx-auto p-5 flex-wrap gap-x-5 flex justify-between">
      <div class="mb-4 md:mb-0">
        <h2 class="text-xl md:text-lg font-bold mb-2">Exclusive</h2>
        <a href="#" class="block mb-2 text-sm">Subscribe</a>
        <a href="#" class="block mb-2 text-sm">Get 10% off your first order</a>
        <input
          type="text"
          class="bg-black border p-1 w-full md:w-auto"
          placeholder="Enter your email"
        />
      </div>

      <div class="mb-4 md:mb-0">
        <h2 class="text-xl md:text-lg font-bold mb-2">Support</h2>
        <p class="mb-2 text-sm">
          111 Bijoy sarani, Dhaka,<br />
          DH 1515, Bangladesh.
        </p>
        <a href="mailto:exclusive@gmail.com" class="block mb-2 text-sm"
          >exclusive@gmail.com</a
        >
        <a href="tel:+88015888889999" class="block mb-2 text-sm"
          >+88015-88888-9999</a
        >
      </div>

      <div class="mb-4 md:mb-0">
        <h2 class="text-xl md:text-lg font-bold mb-2">Account</h2>
        <a href="#" class="block mb-2 text-sm">My Account</a>
        <a href="#" class="block mb-2 text-sm">Login / Register</a>
        <a href="#" class="block mb-2 text-sm">Cart</a>
        <a href="#" class="block mb-2 text-sm">Wishlist</a>
        <a href="#" class="block mb-2 text-sm">Shop</a>
      </div>

      <div class="mb-4 md:mb-0">
        <h2 class="text-xl md:text-lg font-bold mb-2">Quick Link</h2>
        <a href="#" class="block mb-2 text-sm">Privacy Policy</a>
        <a href="#" class="block mb-2 text-sm">Terms Of Use</a>
        <a href="#" class="block mb-2 text-sm">FAQ</a>
        <a href="#" class="block mb-2 text-sm">Contact</a>
      </div>

      <div>
        <h2 class="text-xl md:text-lg font-bold mb-2">Download App</h2>
        <p class="mb-2 text-sm">Save $3 with App New User Only</p>
        <div class="flex gap-3">
          <div>
            <a href="#"><img :src="qrCode" class="mt-1" alt="Qr Code" /></a>
          </div>
          <div>
            <a href="#"><img :src="google" alt="Play Market" /></a>
            <a href="#"><img :src="appStore" alt="App Store" class="my-3" /></a>
          </div>
        </div>
        <div class="flex gap-5">
          <a href="#">
            <Icon icon="ri:facebook-line" />
          </a>
          <a href="#">
            <Icon icon="iconoir:twitter" />
          </a>
          <a href="#">
            <Icon icon="iconoir:instagram" />
          </a>
          <a href="#">
            <Icon icon="ri:linkedin-line" />
          </a>
        </div>
      </div>
    </div>

    <div class="text-center p-3 border-t-2 border-gray-500">
      <p class="text-gray-500 text-sm">
        Copyright Rimel 2022. All right reserved
      </p>
    </div>
  </footer>
</template>

<script setup>
import { appStore, google, qrCode } from "../assets";
import { Icon } from "@iconify/vue";
</script>
