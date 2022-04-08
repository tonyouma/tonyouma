<template>
  <div class="h-screen">
    <div class="mt-6">
      <p class="text-2xl">
        Hello there, <span>&#128075;</span>
        <!-- I am -->
      </p>
      <h1 class="text-5xl font-bold py-8">
        I am Tony Ouma<br />
        <span class="text-4xl">UI/UX Designer and Software Developer</span>
      </h1>
      <p class="text-gray-500 md:w-2/3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        exercitationem atque laudantium perferendis facilis aliquam explicabo
        minima quasi assumenda officia?
      </p>
      <div>
        <button class="py-2 px-6 bg-lime-500 my-12">Reach Out</button>
      </div>
 
      <!-- <div>
        <NuxtLink class="float-right underline text-gray-400" to="*"
          >Download resume
        </NuxtLink>
      </div> -->
      <div class="">
        <Work />
      </div>
    </div>
  </div>
</template>
<script>
import Work from './Work.vue'
export default {
  components: { Work },
}
</script>
