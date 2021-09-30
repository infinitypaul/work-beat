<template>
  <div class="space-y-3">
    <div class="track flex shadow shadow-inner shadow-md items-center justify-between bg-white py-2 lg:py-4 px-1 lg:px-2 cursor-pointer transition duration-200 ease-in hover:bg-gray-200 active:opacity-50 rounded-lg" v-for="play in playlist.tracks" :key="play._id">
      <a hreh='#' v-on:click="setTracked(play)" class="flex-1 flex items-center">
        <div class="mr-4">
          <img :src="play.contributors[0].profile_image" :title="'Shared by '+play.contributors[0].name+' | '+play.contributors[0].about " alt="" class="w-[30px] h-[30px] rounded-full" />
        </div>
        <div>
          <p id="title" class="font-semibold lg:font-bold text-sm lg:text-base text-castos">
            {{ play.title }}
          </p>
          <p class="text-left text-primary font-light text-xs lg:text-sm">
            {{ play.artist_names }}
          </p>
        </div>
      </a>
      <div class="flex items-center space-x-2 opacity-10 hover:opacity-100 transition duration-100 ease-in-out">
        <span class="border rounded-lg border-gray-300 py-1 px-4 cursor-pointer transform transition duration-200 ease-in-out hover:scale-110"><a
          :href="play.track_url"><i class="fab fa-spotify text-xl"></i></a></span>
        <span class="border rounded-lg border-gray-300 py-1.5 px-3 cursor-pointer transform transition duration-200 ease-in-out hover:scale-110"> <a
          :href="'https://music.apple.com/us/search?term='+play.title"><i class="fas fa-music text-white bg-gray-700 py-1 px-1.5 rounded text-xs"></i></a></span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'TrackList',
    props: ['playlist'],
    methods: {
      ...mapActions({
        setTracked : 'playlists/setTrack'
      })
    }
  };
</script>
