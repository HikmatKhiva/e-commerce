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
      <div class="relative w-1/2 h-full bg-blue-500">
        <img
          class="w-full h-full object-cover"
          src="../layouts/img/Frame 684.png"
          alt=""
        />
        <div class="absolute bottom-5 left-5 text-white w-[300px] bg-red-500">
          <h2>PlayStation 5</h2>
          <p>Black and White version of the PS5 coming out on sale.</p>
          <a href="">Shop now</a>
        </div>
      </div>
      <!-- Category Images -->
      <div class="w-1/2 h-full flex flex-col gap-y-3">
        <img
          class="w-full h-1/2 object-cover"
          src="../layouts/img/Frame 685.png"
          alt=""
        />
        <div class="flex gap-3 flex-grow">
          <img
            class="w-full h-full object-cover"
            src="../layouts/img/Frame 686.png"
            alt=""
          />
          <img
            class="w-full h-full object-cover"
            src="../layouts/img/Frame 687.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
