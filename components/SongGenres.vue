<template>
  <div class="space-x-2 space-y-3 flex flex-grow-0 flex-shrink-0 flex-wrap items-end justify-start">
    <span class="lg:px-1.5 xl:px-2.5 text-white lg:py:1 xl:py-1.5 text-[10px] xl:text-xs font-medium rounded border border-gray-200" v-for="(genre, index) in songGenres" :key="index.toString()">
      {{ genre }}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'SongGenres',
    props: {
      songGenres: {},
    },
  };
</script>
<style>
  html,
  body {
    @apply h-full overflow-scroll lg:overflow-hidden;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
</style>
