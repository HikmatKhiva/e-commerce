<template>
    <aside class="border-r pr-3 pt-10 w-[250px]">
      <ul class="flex flex-col gap-y-4">
        <li class="flex flex-col cursor-pointer " v-for="asideLink in asideLinks" :key="asideLink.id">
          <span class=" flex items-center justify-between gap-x-2">
              <a :to="asideLink.to">{{ asideLink.title }}</a>
              <Icon  v-if="asideLink?.dropDown?.length > 0" icon="material-symbols:arrow-forward-ios" />
          </span>
          <ul v-if="asideLink?.dropDown?.length">
            <!-- <li v-for="link in asideLink.dropDown" :key="link.id">{{ link.title }}</li> -->
          </ul>
        </li>
      </ul>
    </aside>
  </template>
  <script setup>
  import { asideLinks } from "../config";
  import { Icon } from '@iconify/vue';
  </script>