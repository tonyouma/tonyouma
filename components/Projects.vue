<template>
  <div>
    <!-- <p class="text-right">Projects</p> -->

    <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-2``">
      <img src="~/assets/Group 867.png" alt="" class="" />
      <div class="my-auto">
        <h3 class="text-xl font-semibold md:text-right">
          Kachezwe Web Application
        </h3>
        <p class="py-4 text-gray-600 md:text-right">
          Web application accessed via web browsers built on React. This is the
          interface for accessing players information and carrying out
          interactions
        </p>
        <span class="px-4 pt-6 flex items-center gap-x-2"
          ><LinkIcon /> <a href="https://kachezwe.com" target="_blank" class="link">kachezwe.com</a></span
        >
        <p class="text-xs py-3 px-4">
          Design Credits:
          <a href="#" class="text-gray-600 pl-3">George S. Ralak</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import LinkIcon from './Icons/LinkIcon.vue'
export default { components: { LinkIcon } }
</script>
<style scoped>
.link {
  color: #9a4eab;
}
</style>
