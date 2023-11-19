<template>
  <div class="container mx-auto">
    <div class="flex gap-3 items-center">
      <div class="bg-[#DB4444] w-5 h-8 rounded-md"></div>
      <div class="text-[#DB4444] font-semibold items-center">
        <p>Featured</p>
      </div>
    </div>
    <div class="text-4xl m-0 font-semibold my-2">
      <h2>New Arrival</h2>
    </div>
    <div class="flex justify-between gap-x-3 h-[800px] my-5 mt-8 rounded-sm">
      <!-- Large Image -->
      <div class="relative w-1/2 h-full bg-black">
        <img
          class="w-full h-full object-cover"
          src="../layouts/img/ps5.png"
          alt=""
        />
        <div class="absolute bottom-10 left-10 text-[#FAFAFA] w-[300px] ">
          <h2 class="text-4xl">PlayStation 5</h2>
          <p class="my-3">Black and White version of the PS5 coming out on sale.</p>
          <a href="£" class="underline  underline-offset-4 text-2xl ">Shop now</a>
        </div>
      </div>
      <!-- Category Images -->
      <div class="w-1/2 h-full flex flex-col gap-y-3">
        <div class="">

          
        </div>
        
        <div class="flex gap-3 flex-grow">
          <img
            class="w-full h-full object-cover"
            src="../layouts/img/speaker.png"
            alt=""
          />
          <img
            class="w-full h-full object-cover"
            src="../layouts/img/perfume.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
