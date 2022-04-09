<template>
  <div class="h-screen">
    <div class="my-auto">
      <div class="my-auto">
        <p class="text-2xl">
          Hello there, <span>&#128075;</span>
          <!-- I am -->
        </p>
        <h1 class="text-5xl font-bold py-8">
          I am Tony Ouma<br />
          <span class="text-4xl">UI/UX Designer and Software Developer</span>
        </h1>
        <p class="text-gray-500 md:w-2/3 mb-24">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          exercitationem atque laudantium perferendis facilis aliquam explicabo
          minima quasi assumenda officia?
        </p>
      </div>
      <div class="flex items-center w-full">
        <div>
          <button
            class="py-2 px-6 button rounded-full flex gap-x-4 text items-center font-medium"
          >
            Reach Out <span><SendIcon /> </span>
          </button>
        </div>
        <div>
          <NuxtLink class="underline text-gray-400 ml-auto" to="*"
            >Download resume
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SendIcon from './Icons/SendIcon.vue'
export default {
  components: { SendIcon },
}
</script>
<style scoped>
.button {
  background-color: #F6F3D4;
  color: #695F15;
}
</style>
