<template>
  <div class="grid grid-cols-1 xl:grid-cols-1 gap-2 contributors max-h-[36vh] overflow-scroll grid-flow-row-dense">
    <div v-for="image in trackLists" :key="image.id" class="cursor-pointer flex space-x-2 items-center hover:translate-x-3 hover:scale-105 transition duration-200 ease-in-out">
      <img :src="image.img" alt="" class="contributors rounded-full w-[40px] h-[40px] border-2 border-gray-100" />
      <div>
        <p class="text-[10px] text-white pt-1 font-semibold whitespace-normal capitalize">
          {{ image.contributorName }}
        </p>
        <p class="text-[8px] text-gray-100 font-light whitespace-normal capitalize">
          {{ image.contributorRole.toLowerCase() }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Contributors',
    props: {
      trackLists: {},
    },
  };
</script>
<style>
  html,
  body {
    @apply h-full overflow-scroll lg:overflow-hidden;
  }

  .contributors::-webkit-scrollbar {
    display: none;
  }

  .contributors {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    @media screen and (min-width: 900px) {
      --mask: linear-gradient(180deg, #000 87%, transparent);
      mask: var(--mask);
      -webkit-mask: var(--mask);
    }
  }

  /* Hide scrollbar for IE, Edge and Firefox */
</style>
