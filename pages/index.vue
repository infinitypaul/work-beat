<template>
  <div class="font-metropolis h-full lg:min-h-screen w-screen antialiased flex">
    <SideBar :song-genres="songGenres.slice(0, 5)" :track-lists="trackLists" />
    <main class="lg:w-[80%] xl:w-[85%] bg-gray-100 shadow-inner border-l-2 border-gray-100" :style="{ background: bgGradient[0], background: `-webkit-linear-gradient(to left, ${bgGradient[1]}, ${bgGradient[0]})`, background: `linear-gradient(to bottom right, ${bgGradient[1]}, ${bgGradient[0]})` }">
      <div class="w-[1200px] mx-auto px-5 pt-4">
        <header class="mb-8 border-b-2 border-gray-200 pb-4">
          <Logo />
        </header>
        <section class="w-full">
          <p class="text-castos font-extrabold text-2xl border-b-2 border-solid border-castos pb-1 mb-6 w-max box-border pr-8">Monthly Top Songs</p>
          <div class="album-container-left">
            <div class="flex w-full overflow-x-scroll album-container">
              <div class="album-cover min-w-[280px] cursor-pointer px-4" v-for="album in albums" :key="album.id">
                <img :src="require(`~/assets/img/bgImg/${album.img}`)" :alt="album.month" class="w-full h-auto rounded-3xl overflow-hidden shadow shadow-xl transform hover:scale-105 hover:translate-y-2 transition duration-500 ease-in-out" />
                <div class="mt-5 text-gray-400 font-light noselect">
                  <p class="font-bold text-castos">{{ album.month }} TrackList</p>
                  <div class="flex justify-between items-center my-2">
                    <p class="text-sm items-center">
                      <span>{{ album.contributors }}</span>
                      <span class="">Contributors</span>
                    </p>
                    <p class="text-sm font-normal"><span class="">Total Tracks:</span> {{ album.trackTotal }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="flex mt-12 h-[400px] space-x-8">
          <div class="w-[70%]">
            <div class="trackList lg:h-[90%] xl:h-full overflow-scroll lg:pb-[10%] xl:pb-[2%]">
              <TrackList :tracks="trackLists" />
            </div>
          </div>
          <div class="bg-gray-50 rounded-xl shadow shadow-2xl flex-1 h-[400px] py-12">
            <div class="player bg-white rounded-xl mx-auto h-[230px] box-border my-auto w-[250px] shadow-xl shadow shadow-inner text-white relative pt-6">
              <div class="w-[150px] h-[150px] relative mx-auto rounded-full overflow-hidden">
                <img src="~/assets/img/bgImg/10.jpeg" alt="" class="w-auto h-auto bg-blend-overlay" />
                <div class="bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 right-0 bottom-0"></div>
                <img src="~/assets/img/playDark.svg" alt="play preview" class="cursor-pointer hover:text-primary-100 active:opacity-20 transition duration-200 ease-in lg:w-[34px] lg:h-[34px] absolute top-[calc(50%-17px)] left-[calc(50%-17px)]" />
              </div>
              <div class="h-[2px] rounded-2xl w-[80%] bg-gray-400 mx-auto mt-4 relative">
                <div class="h-[10px] w-[10px] rounded-full bg-white absolute -top-1 border-2 box-border border-castos ml-[30%]" />
              </div>
            </div>
            <div class="text-castos mt-6 mx-auto w-[250px]">
              <div class="flex justify-between items-end py-3 px-4">
                <div class="">
                  <p class="lg:text-sm font-bold">Essence</p>
                  <p class="text-xs">Wizkid, Tems</p>
                </div>
                <ion-icon name="play-skip-forward-circle-outline" class="cursor-pointer w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
  import SideBar from '~/components/SideBar';
  import Logo from '~/components/Logo';
  import TrackList from '~/components/TrackList';

  export default {
    components: { Logo, SideBar, TrackList },
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
        bgGradient: ['#fdfbfb', '#ebedee'],
        albums: [
          {
            id: 1,
            img: '1.jpeg',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 2,
            img: '2.webp',
            month: 'September',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 3,
            img: '3.jpeg',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 4,
            img: '4.jpeg',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 5,
            img: '5.png',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 6,
            img: '6.jpeg',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 7,
            img: '7.jpeg',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 8,
            img: '8.jpeg',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 9,
            img: '9.png',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 10,
            img: '10.jpeg',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
          {
            id: 11,
            img: '11.jpeg',
            month: 'August',
            trackTotal: 32,
            contributors: 22,
          },
        ],
      };
    },
    methods: {},
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

  .album-container::-webkit-scrollbar {
    display: none;
  }

  .album-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .album-container {
    @media screen and (min-width: 900px) {
      --mask: linear-gradient(90deg, #000 85%, transparent);
      mask: var(--mask);
      -webkit-mask: var(--mask);
    }
  }
  .album-container-left {
    @media screen and (min-width: 900px) {
      --masked: linear-gradient(-90deg, #000 85%, transparent);
      mask: var(--masked);
      -webkit-mask: var(--masked);
    }
  }

  .trackList::-webkit-scrollbar,
  .contributors::-webkit-scrollbar {
    display: none;
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
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
</style>
