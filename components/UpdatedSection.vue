<template>
  <section class='flex overflow-scroll updatedList space-x-8 -mr-5 pr-7 mb-10'>
    <UpdatedList />
    <UpdatedList />
    <UpdatedList />
  </section>
</template>
<script>
import UpdatedList from '~/components/UpdatedList'

export default {
  name: 'UpdatedSection',
  components: { UpdatedList }
}
</script>
<style>
.updatedList::-webkit-scrollbar {
  display: none;
}

.updatedList {
{
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
}
</style>
