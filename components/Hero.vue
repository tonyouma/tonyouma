<template>
  <div class="h-screen items-center flex ">
    <div class="">
      <div class="">
        <p class="text-2xl">
          Hello there, <span>&#128075;</span>
          <!-- I am -->
        </p>
        <h1 class="text-5xl font-bold py-12">
          I am Tony Ouma<br />
          <span class="text-4xl">UI/UX Designer and Software Developer</span>
        </h1>
        <p class="text-gray-500 md:w-2/3 mb-24">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          exercitationem atque laudantium perferendis facilis aliquam explicabo
          minima quasi assumenda officia?
        </p>
      </div>
      <div class="flex justify-between items-center w-full">
        <div>
          <button
            class="py-2 px-8 button rounded-full flex gap-x-4 text items-center font-bold bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
          >
            Reach Out <span><SendIcon /> </span>
          </button>
        </div>
        <div>
          <a
            class="text-gray-400 flex gap-x-2 items-center text-sm"
            href="https://read.cv/ouma"
            ><FileTextIcon /> Resume
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SendIcon from './Icons/SendIcon.vue'
import FileTextIcon from './Icons/FileTextIcon.vue'
export default {
  components: { SendIcon, FileTextIcon },
}
</script>
<style scoped>
.button {
  background-color: #f6f3d4;
  color: #695f15;
}
</style>
