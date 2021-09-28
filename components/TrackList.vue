<template>
  <div class="space-y-3">
    <div class="track flex shadow shadow-inner shadow-md items-center justify-between bg-white py-2 lg:py-4 px-1 lg:px-2 cursor-pointer transition duration-200 ease-in hover:bg-gray-200 active:opacity-50 rounded-lg" v-for="track in tracks" :key="track.id">
      <div class="flex-1 flex items-center">
        <div class="mr-4">
          <img :src="track.img" alt="" class="w-[30px] h-[30px] rounded-full" />
        </div>
        <div>
          <p id="title" class="font-semibold lg:font-bold text-sm lg:text-base text-castos">
            {{ track.title }}
          </p>
          <p class="text-left text-primary font-light text-xs lg:text-sm">
            {{ track.contributor }}
          </p>
        </div>
      </div>
      <div class="flex items-center space-x-2 opacity-10 hover:opacity-100 transition duration-100 ease-in-out">
        <span class="border rounded-lg border-gray-300 py-1 px-4 cursor-pointer transform transition duration-200 ease-in-out hover:scale-110"><i class="fab fa-spotify text-xl"></i></span>
        <span class="border rounded-lg border-gray-300 py-1.5 px-3 cursor-pointer transform transition duration-200 ease-in-out hover:scale-110"> <i class="fas fa-music text-white bg-gray-700 py-1 px-1.5 rounded text-xs"></i></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TrackList',
    props: ['tracks'],
  };
</script>
