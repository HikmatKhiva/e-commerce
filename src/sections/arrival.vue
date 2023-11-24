<template>
  <div class="container mx-auto">
    <div class="flex gap-3 items-center">
      <div class="bg-[#DB4444] w-5 h-8 rounded-md"></div>
      <div class="text-[#DB4444] font-inter items-center">
        <p>Featured</p>
      </div>
    </div>
    <div class="text-4xl m-0 font-semibold my-2">
      <h2>New Arrival</h2>
    </div>
    <div class="flex justify-between gap-x-3 h-[800px] my-5 mt-8 rounded-sm">
      <!-- Large Image -->
      <div class="relative w-1/2 rounded-md h-full bg-black">
        <img
          class="w-full h-full object-cover"
          src="../layouts/img/ps5.png"
          alt=""
        />
        <div class="absolute bottom-10 left-10 text-[#FAFAFA] w-[300px]">
          <h2 class="text-4xl">PlayStation 5</h2>
          <p class="my-3">
            Black and White version of the PS5 coming out on sale.
          </p>
          <a href="£" class="underline underline-offset-4 text-2xl">Shop now</a>
        </div>
      </div>
      <!-- Category Images -->
      <div class="w-1/2 h-full flex flex-col gap-y-3">
        <div
          class="gap-3 flex-grow flex bg-[#0D0D0D] h-1/2 rounded-md relative"
        >
          <div class="w-1/2">
            <div class="absolute bottom-10 left-10 text-[#FAFAFA] w-[300px]">
              <h2 class="text-4xl">Women’s Collections</h2>
              <p class="my-3">
                Featured woman collections that give you another vibe.
              </p>
              <a href="£" class="underline underline-offset-4 text-2xl"
                >Shop now</a
              >
            </div>
          </div>
          <img
            class="w-1/2 h-full object-cover rounded-md"
            src="../layouts/img/women.png"
            alt="women"
          />
        </div>

        <div class="flex gap-3 flex-grow h-1/2 relative">
          <div class="bg-black w-1/2 grid rounded-md place-items-center">
            <img
              class="h-[80%] w-[80%]"
              src="../layouts/img/speaker.png"
              alt="speaker"
            />
            <div class="absolute bottom-10 left-10 text-[#FAFAFA] w-[300px]">
              <h2 class="text-3xl">Speakers</h2>
              <p class="my-3">
                Featured woman collections that give you another vibe.
              </p>
              <a href="£" class="underline underline-offset-4 text-xl"
                >Shop now</a
              >
            </div>
          </div>
          <div
            class="bg-black rounded-md w-1/2 grid place-items-center relative"
          >
            <img
              class="h-[80%] w-[80%]"
              src="../layouts/img/perfume.png"
              alt="po"
            />
            <div class="absolute bottom-10 left-10 text-[#FAFAFA] w-[300px]">
              <h2 class="text-3xl">Perfume</h2>
              <p class="my-3">
                GUCCI INTENSE OUD EDP
              </p>
              <a href="£" class="underline underline-offset-4 text-xl"
                >Shop now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-evenly">
      <div class="text-center">
        <div class="w-20 h-20 bg-red-500 rounded-[50%] flex justify-center items-center mx-auto">
        <div class="w-14 h-14 bg-black rounded-[50%]">
          <img src="" alt="">
        </div>
      </div>
      <div class="t">
        <h2>FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
      </div>
      <div class="text-center">
        <div class="w-20 h-20 bg-red-500 rounded-[50%] flex justify-center items-center mx-auto">
        <div class="w-14 h-14 bg-black rounded-[50%]">
          <img src="" alt="">
        </div>
      </div>
      <div class="t">
        <h2>FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
      </div>
      <div class="text-center">
        <div class="w-20 h-20 bg-[#2F2E30]  rounded-[50%] flex justify-center items-center mx-auto">
        <div class="w-14 h-14 bg-black rounded-[50%]">
          <img src="" alt="">
        </div>
      </div>
      <div class="t">
        <h2>FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
      </div>


    </div>
  </div>
</template>