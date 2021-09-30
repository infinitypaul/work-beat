<template>
  <div class="bg-gray-50 rounded-xl shadow shadow-2xl flex-1 h-[400px] py-12">
    <div class="player bg-white rounded-xl mx-auto h-[230px] box-border my-auto w-[250px] shadow-xl shadow shadow-inner text-white relative pt-6">
      <div class="w-[150px] h-[150px] relative mx-auto rounded-full overflow-hidden">
        <img :src="getTrack.contributors[0].profile_image" alt="" class="w-auto h-auto bg-blend-overlay" />
        <div class="bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 right-0 bottom-0"></div>
        <img src="~/assets/img/playDark.svg" alt="play preview" class="cursor-pointer hover:text-primary-100 active:opacity-20 transition duration-200 ease-in lg:w-[34px] lg:h-[34px] absolute top-[calc(50%-17px)] left-[calc(50%-17px)]" />
      </div>
      <audio :src='getTrack.preview_url' controls autoplay ref='player'></audio>
<!--      <div class="h-[2px] rounded-2xl w-[80%] bg-gray-400 mx-auto mt-4 relative">-->
<!--        <div class="h-[10px] w-[10px] rounded-full bg-white absolute -top-1 border-2 box-border border-castos ml-[30%]" />-->
<!--      </div>-->
    </div>
    <div class="text-castos mt-6 mx-auto w-[250px]">
      <div class="flex justify-between items-end py-3 px-4">
        <div class="">
          <p class="lg:text-sm font-bold">{{ getTrack.title }}</p>
          <p class="text-xs">{{ getTrack.artist_names }}</p>
        </div>
        <ion-icon name="play-skip-forward-circle-outline" class="cursor-pointer w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters} from 'vuex';
  export default {
    name: 'Player',
    computed: {
      ...mapGetters({
        getTrack : 'playlists/track'
      })
    },
  };
</script>

<style scoped>

</style>
