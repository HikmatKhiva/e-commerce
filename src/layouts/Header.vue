<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
<template>
  <nav class="">
    <div class=" container mx-auto">
      <div class="flex items-center">
        <div class="flex j-between py-2 w-[70%] items-center ">
          <div class="items-center justify-center">
            <a href="#" class="text-lg font-semibold">Exclusive</a>
          </div>
          <div class=" md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="text-black px-3 py-2 rounded text-sm font-medium hover:underline underline-offset-4 ">Home</a>
              <a href="#" class="text-black px-3 py-2 rounded text-sm font-medium  hover:underline underline-offset-4 ">Contact</a>
              <a href="#" class="text-black px-3 py-2 rounded text-sm font-medium  hover:underline underline-offset-4 ">About</a>
              <a href="#" class="text-black px-3 py-2 rounded text-sm font-medium   hover:underline underline-offset-4 ">Sign up</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> -->
          <input type="text" class="border rounded  text-sm bg-slate-50 w-full md:w-auto placeholder:text-slate-400"
            placeholder="What are you looking for">
          <div class="mr-2 flex md:hidden">
            <!-- <font-awesome-icon class="relative" icon="fa-regular fa-heart" />
            <font-awesome-icon class="relative" icon="fa-solid fa-cart-shopping" /> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
