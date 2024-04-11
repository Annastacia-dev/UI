<script setup>
</script>

<template>
 <div class="bg-gray-50 grid sm:grid-cols-2 grid-cols-1 gap-5 pt-28 px-10 min-h-screen overflow-clip">
    <div class="flex flex-col gap-5">
      <h1 class="text-5xl leading-tight font-coolvetica tracking-wide">
         handmade,
         <br />
         with an extra
         <br />
         pinch of love
      </h1>
      <p class="leading-7 font-light text-sm mt-5 sm:w-3/4">
       We take pride in crafting every item by hand, ensuring that each bite is filled with the love and care that only homemade treats can offer. From our freshly baked bread to our decadent pastries, every product is made with the finest ingredients and a dedication to quality. Explore our menu and taste the difference of handmade goodness today.
      </p>
      <button class="bg-primary text-white py-3 px-6 rounded-full mt-5 sm:w-40">Explore Menu</button>
    </div>
    <div class="bg-black sm:rounded-l-full sm:-mt-28 sm:-mr-7 overflow-hidden flex justify-center items-center border-[12px] border-primary">
       <video
         class="h-screen w-full object-cover"
         src="https://res.cloudinary.com/dlahz5ciz/video/upload/v1712821455/bakingvideo_ouzxfr.mp4"
         autoplay
         loop
         muted
         ></video>
    </div>
 </div>
</template>
