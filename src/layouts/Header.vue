<script setup>
import {navLinks} from "../config"
import {Icon} from "@iconify/vue"
</script>

<template>
 <header class="pt-3 pb-2 border-b">
    <div class="container mx-auto flex">
      <div class="flex items-center gap-x-20 flex-grow">
        <!-- Logo -->
        <a class="font-bold text-2xl" to="/">Exclusive</a>
        <nav>
          <ul class="flex gap-5">
            <li class="cursor-pointer link" v-for="link in navLinks" :key="link.id">
              <router-link :to="link.to">{{ link.title }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <!--  -->
      <div class="flex gap-5">
        <form
          class="flex relative items-center gap-x-1 rounded bg-[#F5F5F5] px-2 py-2 w-[250px]"
        >
          <label for="search">
            <input
              id="search"
              type="text"
              class="bg-transparent outline-none px-2 flex-grow"
              placeholder="What are you looking for?"
            />
          </label>
          <button type="submit">
            <Icon icon="ph:magnifying-glass-light" class="text-2xl" />
          </button>
        </form>
        <div class="flex gap-x-3 items-center">
          <router-link to="/wishlist">
            <Icon icon="ic:sharp-favorite-border" class="text-2xl" />
          </router-link>
          <button type="button">
            <Icon icon="material-symbols-light:shopping-cart-outline-sharp" class="text-2xl" />
          </button>
          <router-link to="/account">
            <Icon icon="mdi:account-outline" class="text-2xl" />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
