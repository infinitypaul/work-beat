<template>
  <a href='#' class="album-cover min-w-[280px] cursor-pointer " v-on:click='checkPlaylist(playlist._id)'>
<!--    <img :src="require(`~/assets/img/bgImg/1.jpeg`)" :alt="playlist.name" class="w-full h-auto rounded-3xl overflow-hidden shadow shadow-xl transform hover:scale-105 hover:translate-y-2 transition duration-500 ease-in-out" />-->
    <div class='w-full h-[280px] shadow shadow-xl transform hover:scale-105 hover:translate-y-2 transition duration-500 ease-in-out rounded-3xl overflow-hidden my-14 mx-4' :style='`backgroundColor: ${playlist.hex}`'>
      <div class=" text-gray-400 font-light noselect h-full relative flex items-center justify-center">
        <img src='~/assets/img/castos-icon.png' alt='Logo' class='w-[80px] filter opacity-30 grayscale brightness-100'>
        <div class='text-right absolute bottom-0 right-0 bg-[rgba(0,0,0,0.5)] px-6 py-2 w-full'><p class="font-bold text-white text-[20px]">{{  playlist.name }}</p></div>
      </div>
    </div>
  </a>
</template>

<script>
  import { mapActions, mapGetters} from 'vuex';

  export default {
    name: 'MontlyPlaylists',
    props : {
      playlist : {
        required : true,
        type : Object
      }
    },
    methods:{
      ...mapActions({
        setPlaylist : 'playlists/Playlist'
      }),
      checkPlaylist(id){
        console.log(id)
        this.setPlaylist(id)
      }
    }
  };
</script>

<style scoped>

</style>
