<template>
  <div class="font-metropolis text-primary bg-[#0F2027] h-full lg:max-h-screen lg:fixed w-screen antialiased flex">
    <!--  <div class='h-[250px] lg:h-[300px] xl:h-[400px] bg-gradient-to-br	from-[#eef2f3] to-[#8e9eab]'></div>-->
    <section class="w-screen lg:w-[75%] lg:flex bg-white">
      <!--  Aside  -->
      <aside class="hidden lg:block bg-gradient-to-r from-[#0F2027] to-[#203A43] px-10 pt-20">
        <!--   Playlist Cover   -->
        <div class="lg:w-[200px] lg:h-[150px] xl:w-[250px] xl:h-[200px] bg-gradient-to-br from-[#4CA1AF] rounded-t-2xl to-[#C4E0E5] relative overflow-hidden flex flex-col justify-end items-start px-3 pb-2">
          <img src="https://scannables.scdn.co/uri/plain/svg/ffffff/black/640/spotify:playlist:1eOoPdLBdrMFGCmkeX85H7" class="absolute left-0 top-0 opacity-20" />
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center space-x-2">
              <img src="~/assets/img/playDark.svg" alt="play preview" class="cursor-pointer hover:text-primary-100 active:opacity-20 transition duration-200 ease-in lg:w-[34px] lg:h-[34px]" />
              <div class="">
                <p class="lg:text-sm font-bold">Thank God</p>
                <p class="text-xs">Dagrin, Omawunmi</p>
              </div>
            </div>
            <ion-icon name="play-skip-forward-circle-outline" class="cursor-pointer w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
          </div>
        </div>
        <!--  Play full songs    -->
        <div class="rounded-b-2xl bg-white lg:px-0 lg:py-2 xl:px-2 xl:py-4 text-center cursor-pointer font-medium text-castos hover:text-white xl:text-sm lg:text-xs shadow-sm transition duration-500 ease-in-out hover:bg-primary-dark active:opacity-50">Play full song on spotify <i class="fab fa-spotify"></i></div>

        <!-- Playlist Track Total  -->
        <div class="mt-10 w-[250px]">
          <p class="text-white font-bold text-sm border-b border-solid border-white pb-1 mb-2 w-max box-border pr-8">Song Genres</p>
          <div class="space-x-2 space-y-3 flex flex-grow-0 flex-shrink-0 flex-wrap items-end justify-start">
            <span class="px-2.5 text-white py-1.5 text-xs font-medium rounded border border-gray-200" v-for="(genre, index) in songGenres" :key="index.toString()">
              {{ genre }}
            </span>
          </div>
        </div>
        <div class="mt-10 w-[250px]">
          <p class="text-white font-bold text-sm border-b border-solid border-white pb-1 mb-4 w-max box-border pr-8">Playlist Info</p>
          <div class="space-y-3">
            <div class="text-white text-sm flex justify-between items-center">
              <span class="font-bold">Total Tracks:</span>
              <span class="underline">100 Songs</span>
            </div>
            <div class="text-white text-sm flex justify-between items-center">
              <span class="font-bold">Total Contributors:</span>
              <span class="underline">34 </span>
            </div>
          </div>
        </div>
      </aside>

      <main class="flex-1 px-20 pt-20">
        <div class="mb-4">
          <h2 class="font-extrabold text-3xl lg:text-4xl text-castos border-b border-gray-100 py-1 border-dashed box-border">Playlist Title</h2>
          <p class="text-sm font-medium text-lightGrey py-3 w-[60%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur dignissimos distinctio ducimus earum molestias odit quas sapiente sed ullam?</p>
        </div>

        <div class="rounded-lg bg-white px-3 py-2.5 w-max text-center cursor-pointer text-primary hover:bg-[rgba(31,41,59,0.3))] text-xs transition duration-500 ease-in-out active:opacity-50 lg:hidden mb-5">
          Play full song on spotify
          <i class="fab fa-spotify ml-2 text-primary hover:text-white"></i>
        </div>
        <div class="trackList lg:h-[80%] overflow-scroll pb-[10%]">
          <TrackList :tracks="trackLists" />
        </div>
      </main>
    </section>
    <aside class="bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] flex-1 shadow-inner border-l-2 border-gray-100">
      <div class="player bg-gradient-to-br from-[#0F2027] to-[#203A43] h-[150px] box-border w-full mb-20 shadow-2xl flex text-white relative">
        <div class="w-max relative">
          <img src="~/assets/img/bgImg/10.jpeg" alt="" class="w-auto h-full bg-blend-overlay" />
          <div class="bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 right-0 bottom-0"></div>
          <img src="~/assets/img/playDark.svg" alt="play preview" class="cursor-pointer hover:text-primary-100 active:opacity-20 transition duration-200 ease-in lg:w-[34px] lg:h-[34px] absolute top-[calc(50%-17px)] left-[calc(50%-17px)]" />
        </div>
        <div class="flex-1">
          <p class="text-[10px] pt-3 px-4">This is a 30 second preview. Go directly to Spotify or Apple Music to listen to the full track.</p>
          <div class="flex justify-between items-end py-3 px-4">
            <div class="">
              <p class="lg:text-sm font-bold">Essence</p>
              <p class="text-xs">Wizkid, Tems</p>
            </div>
            <ion-icon name="play-skip-forward-circle-outline" class="cursor-pointer w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
          </div>
        </div>
      </div>
      <div class="mt-4 mx-8">
        <h3 class="font-bold text-lg border-b border-solid border-[#232323] mb-4 w-max box-border pr-8">Contributors</h3>
        <div class="grid grid-cols-4 gap-2 contributors max-h-[50vh] overflow-scroll pb-[10%]">
          <div v-for="image in trackLists" :key="image.id" class="cursor-pointer">
            <img :src="image.img" alt="" class="contributors rounded-full w-[70px] h-[70px] hover:scale-105 transition duration-200 ease-in-out border-4 border-gray-200" />
            <p class="text-[10px] text-gray-600 pt-1 font-semibold whitespace-normal capitalize">
              {{ image.contributorName }}
            </p>
            <p class="text-[8px] text-castos font-light whitespace-normal capitalize">
              {{ image.contributorRole.toLowerCase() }}
            </p>
          </div>
        </div>
      </div>
      <!--   Logo     -->

      <div class="flex flex-col items-start absolute bottom-4 right-8">
        <img src="~/assets/img/castos-logo.png" alt="" class="w-[80px] h-auto self-end" />
        <p class="text-[10px] text-gray-500 font-medium pb-3">Copyright 2021 &copy | All Rights Reserved</p>
      </div>
    </aside>
  </div>
</template>

<script>
  import TrackList from '~/components/TrackList';

  export default {
    name: 'PlaylistDetails',
    components: { TrackList },
    data() {
      return {
        trackLists: [
          {
            id: 1,
            title: 'The Lift Freestyle',
            contributor: 'Sam Wise',
            img: 'https://randomuser.me/api/portraits/men/16.jpg',
            contributorName: 'Bennie D. Brandt',
            contributorRole: 'DATA ARCHITECT',
          },
          {
            id: 2,
            title: 'Dearest Alfred (MyJoy)',
            contributor: 'Khruangbin, Knxwledge',
            img: 'https://randomuser.me/api/portraits/men/54.jpg',
            contributorName: 'Larry E. Johnson',
            contributorRole: 'DATABASE ADMINISTRATOR',
          },
          {
            id: 3,
            title: 'Thank God',
            contributor: 'Dagrin, Omawunmi',
            img: 'https://randomuser.me/api/portraits/men/25.jpg',
            contributorName: 'Michael M. Winters',
            contributorRole: 'SYSTEMS ENGINEER',
          },
          {
            id: 4,
            title: 'Fields',
            contributor: 'Giveon',
            img: 'https://randomuser.me/api/portraits/women/56.jpg',
            contributorName: 'Jessica E. Yang',
            contributorRole: 'BUSINESS SYSTEMS ANALYST',
          },
          {
            id: 5,
            title: 'Heartbreak Anniversary',
            contributor: 'Giveon',
            img: 'https://randomuser.me/api/portraits/men/75.jpg',
            contributorName: 'Devin S. Calvo',
            contributorRole: 'PYTHON DEVELOPER',
          },
          {
            id: 6,
            title: 'Balance ton quoi',
            contributor: 'Angèle',
            img: 'https://randomuser.me/api/portraits/men/23.jpg',
            contributorName: 'Carl N. Miller',
            contributorRole: 'FRAMEWORKS SPECIALIST',
          },
          {
            id: 7,
            title: 'Where This Flower Blooms (feat. Frank Ocean)',
            contributor: 'Tyler, The Creator, Frank Ocean',
            img: 'https://randomuser.me/api/portraits/women/15.jpg',
            contributorName: 'Selina T. Reese',
            contributorRole: 'FULL-STACK DEVELOPER',
          },
          {
            id: 8,
            title: 'Bank Alert',
            contributor: 'P-Square',
            img: 'https://randomuser.me/api/portraits/men/97.jpg',
            contributorName: 'Nathan D. Richey',
            contributorRole: 'MOBILE DEVELOPER',
          },
          {
            id: 9,
            title: 'Immunity',
            contributor: 'Benny The Butcher, Elcamino',
            img: 'https://randomuser.me/api/portraits/women/14.jpg',
            contributorName: 'Marie F. Hagan',
            contributorRole: 'FRONT-END DEVELOPER',
          },
          {
            id: 10,
            title: 'Gnat',
            contributor: 'Eminem',
            img: 'https://randomuser.me/api/portraits/men/55.jpg',
            contributorName: 'Melvin J. Phipps',
            contributorRole: 'ACCESSIBILITY SPECIALIST',
          },
          {
            id: 11,
            title: 'Glide',
            contributor: 'Jords',
            img: 'https://randomuser.me/api/portraits/women/75.jpg',
            contributorName: 'Cassandra W. Ward',
            contributorRole: 'UX DESIGNER',
          },
          {
            id: 12,
            title: 'Mood (feat. iann dior)',
            contributor: '24kGoldn, iann dior',
            img: 'https://randomuser.me/api/portraits/men/24.jpg',
            contributorName: 'Todd F. Sthilaire',
            contributorRole: 'GROWTH HACKER',
          },
          {
            id: 13,
            title: 'Indian Summer',
            contributor: 'Jai Wolf',
            img: 'https://randomuser.me/api/portraits/men/11.jpg',
            contributorName: 'Stephen M. Banks',
            contributorRole: 'SOCIAL MEDIA MANAGER',
          },
          {
            id: 14,
            title: 'NDIBAMBE',
            contributor: 'Heavy K',
            img: 'https://randomuser.me/api/portraits/women/65.jpg',
            contributorName: 'Carrie C. Williams',
            contributorRole: 'DIGITAL MARKETING MANAGER',
          },
          {
            id: 15,
            title: 'Rush',
            contributor: 'Dangbana Rebublik, Bella Shmurda',
            img: 'https://randomuser.me/api/portraits/men/97.jpg',
            contributorName: 'William L. Ledesma',
            contributorRole: 'WEB ANALYTICS DEVELOPER',
          },
          {
            id: 16,
            title: 'Kiss Me Like You Miss Me',
            contributor: 'CKay',
            img: 'https://randomuser.me/api/portraits/men/34.jpg',
            contributorName: 'Darwin C. McCoy',
            contributorRole: 'SEO CONSULTANT',
          },
          {
            id: 17,
            title: 'Mr Money',
            contributor: 'Asake',
            img: 'https://randomuser.me/api/portraits/women/36.jpg',
            contributorName: 'Rebecca E. Sowers',
            contributorRole: 'MARKETING TECHNOLOGIST',
          },
        ],
        songGenres: ['Indie Rock', 'RnB', 'Pop Fusion', 'Afrobeats', 'Alternative Music', 'Soft Rock', 'Jazz', 'Oldies', 'Pop', 'Rap', 'Highlife', 'Palm wine', 'Juju', 'Ubongo'],
      };
    },
  };
</script>

<style>
  html,
  body {
    @apply h-full overflow-scroll lg:overflow-hidden;
  }

  .inline-list {
    @apply inline-block text-sm lg:text-base;
  }
  .trackList::-webkit-scrollbar,
  .contributors::-webkit-scrollbar {
    display: none;
  }

  .contributors {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .trackList {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    @media screen and (min-width: 900px) {
      --mask: linear-gradient(180deg, #000 85%, transparent);
      mask: var(--mask);
      -webkit-mask: var(--mask);
    }
  }
</style>
