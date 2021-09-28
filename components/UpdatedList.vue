<template>
  <div class='flex-grow-0 flex-shrink-0 bg-[rgba(149,112,255,.10)] w-[179px] h-[65px] rounded-2xl flex justify-items-start items-center relative'>
    <div class='w-[37px] h-[37px] rounded-full bg-[#fb478b] mx-3'></div>
    <div class='content'>
      <p class='font-bold text-primary text-sm'>Ayesha Ruhin</p>
      <div class='flex justify-between items-center'>
        <img src='~/assets/img/song.svg' class='w-[13px] h-[13px]' alt='song list'>
        <p class='font-medium text-lightGrey text-xs'>Some Feeling</p>
      </div>
    </div>
    <img src='~/assets/img/playDark.svg' class='w-7 h-7 absolute -bottom-0.5 -right-3.5' alt=''>
  </div>
</template>
<script>
export default {
  name: 'UpdatedList'
}
</script>
