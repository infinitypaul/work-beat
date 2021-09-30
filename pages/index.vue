<template>
  <div class="font-metropolis h-full lg:min-h-screen w-screen antialiased flex">
    <SideBar :song-genres="songGenres.slice(0, 5)" :track-lists="trackLists" :playlist='playlist' v-if='playlist.tracks.length' />
    <main class="lg:w-[80%] xl:w-[85%] bg-gray-100 shadow-inner border-l-2 border-gray-100" :style="{ background: bgGradient[0], background: `-webkit-linear-gradient(to left, ${bgGradient[1]}, ${bgGradient[0]})`, background: `linear-gradient(to bottom right, ${bgGradient[1]}, ${bgGradient[0]})` }">
      <div class="w-[1200px] mx-auto px-5 pt-4">
        <header class="mb-8 border-b-2 border-gray-200 pb-4">
          <Logo />
        </header>
        <section class="w-full">
          <p class="text-castos font-extrabold text-2xl border-b-2 border-solid border-castos pb-1 mb-6 w-max box-border pr-8">Monthly Top Songs</p>
          <div class="album-container-left">
            <div class="flex w-full overflow-x-scroll album-container">
              <MontlyPlaylists v-for='playlist in getPlaylists' key='playlist._id' :playlist='playlist'  />
            </div>
          </div>
        </section>
        <section class="flex mt-12 h-[400px] space-x-8">
          <div class="w-[70%]">
            <div class="trackList lg:h-[90%] xl:h-full overflow-scroll lg:pb-[10%] xl:pb-[2%]">
              <TrackList v-if='playlist.tracks.length' :playlist="playlist" />
            </div>
          </div>
          <Player v-if='getTrack.contributors.length' />

        </section>
      </div>
    </main>
  </div>
</template>

<script>
  import { mapActions, mapGetters} from 'vuex';
  import SideBar from '~/components/SideBar';
  import Logo from '~/components/Logo';
  import TrackList from '~/components/TrackList';
  import MontlyPlaylists from '~/components/MontlyPlaylists';
  import Player from '~/components/Player';

  export default {
    components: { Logo, SideBar, TrackList, MontlyPlaylists, Player },
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
    computed: {
      ...mapGetters({
        getPlaylists : 'playlists/playlists',
        playlist : 'playlists/playlist',
        getTrack : 'playlists/track'
      })
    },
    methods: {
      ...mapActions({
        listPlaylistsAction : 'playlists/listPlaylists'
      })
    },

    mounted() {
      this.listPlaylistsAction()
    }
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
  /*.album-container {*/
  /*  @media screen and (min-width: 900px) {*/
  /*    --mask: linear-gradient(90deg, #000 85%, transparent);*/
  /*    mask: var(--mask);*/
  /*    -webkit-mask: var(--mask);*/
  /*  }*/
  /*}*/
  /*.album-container-left {*/
  /*  @media screen and (min-width: 900px) {*/
  /*    --masked: linear-gradient(-90deg, #000 85%, transparent);*/
  /*    mask: var(--masked);*/
  /*    -webkit-mask: var(--masked);*/
  /*  }*/
  /*}*/

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
