<template>
  <aside class="flex-1 bg-[#1a0a34] px-7 pt-20" >
    <div class="">
      <div class="lg:h-auto bg-gradient-to-br from-[#4CA1AF] rounded-xl to-[#C4E0E5] relative overflow-hidden flex flex-col justify-end items-start mx-auto pb-2 mb-3">
        <img alt="" :src="'https://scannables.scdn.co/uri/plain/svg/ffffff/black/640/'+playlist.playlist_uri" class="opacity-20 w-full h-auto" />
        <div class="pt-8 px-3">
          <p class="lg:text-sm font-bold">{{ playlist.name}}</p>
          <p class="text-xs">{{ playlist.tracks.length  }} {{  pluralize('Song', playlist.tracks.length) }}</p>
        </div>
      </div>
      <div class="rounded-lg bg-gray-200 lg:text-[10px] xl:text-xs xl:text-sm text-center cursor-pointer font-medium text-castos hover:text-white shadow-sm transition duration-500 ease-in-out hover:bg-gray-400 active:opacity-50 mx-auto box-border px-2 py-2">
        <a :href="playlist.playlist_url" target='_blank'>Play full song on spotify <i class="fab fa-spotify"></i></a>
      </div>
    </div>

    <div class="mt-10">
      <p class="text-gray-50 font-bold text-sm border-b-2 border-solid border-white pb-1 mb-2 w-max box-border pr-8">Song Genres</p>
      <SongGenres :song-genres="songGenres" />
    </div>

    <div class="mt-10">
      <div class="flex justify-between items-center mb-2">
        <p class="text-lightPurple font-bold text-sm border-b-2 border-solid border-gray-100 pb-1 mb-2 w-max box-border lg:pr-4 xl:pr-8">Contributors</p>
        <p class="text-castos font-medium lg:text-[10px] xl:text-xs pb-1 mb-2 bg-primary-100 rounded-full px-1.5 py-1 box-border">{{ playlist.contributors.length }}</p>
      </div>
      <Contributors :track-lists="trackLists" :teams='playlist.contributors' />
    </div>
  </aside>
</template>
<script>
  import SongGenres from '~/components/SongGenres';
  import Contributors from '~/components/Contributors';
  import pluralize from 'pluralize'

  export default {
    name: 'SideBar',
    components: { Contributors, SongGenres },
    props: {
      songGenres: {},
      trackLists: {},
      playlist : {},
      contributors : []
    },
    computed :{

    },
    methods :{
      pluralize:pluralize,
    }
  };
</script>
<style>
  html,
  body {
    @apply h-full overflow-scroll lg:overflow-hidden;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
</style>
