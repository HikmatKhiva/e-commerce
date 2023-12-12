<template>
  <section class="flex-grow flex flex-col pt-10 pb-5">
    <div class="container mx-auto flex flex-col flex-grow">
      <div class="flex justify-start gap-x-2 pb-10">
        <router-link class="text-[#808080]" to="/">Home</router-link>
        <span class="text-[#808080]">/</span> 
        <p>404 Error</p>
      </div>
      <div class="text-center grid place-items-center flex-grow h-full">
        <div>
          <h2
            class="font-inter font-medium 2xl:text-[110px] xl:text-8 lg:text-7xl md:text-6xl text-3xl"
          >
            404 Not Found
          </h2>
          <p class="font-poppins">
            Your visited page not found. You may go home page.
          </p>
          <router-link
            to="/"
            class="bg-[#DB4444] px-12 py-4 inline-block text-white rounded mt-20"
            >Back to home page</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
