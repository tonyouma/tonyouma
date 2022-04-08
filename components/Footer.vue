<template>
  <div class="bottom-0 absolute py-3">
    <div class="flex justify-between w-full">
      <div>
        <p>&copy; Copyright {{currentDate.getFullYear()}}</p>
      </div>
      <ul class="gap-x-6 flex">
        <li class="flex gap-x-3">
          <span><LinkedinIcon /> </span>
          <p class="text-gray-400">LinkedIn</p>
        </li>
        <li class="flex gap-x-3">
          <span><GitHubIcon /> </span>
          <p>GitHub</p>
        </li>
        <li class="flex gap-x-3">
          <span><TwitterIcon /> </span>
          <p>Twitter</p>
        </li>
        <!-- <li class="flex gap-x-3">GitHub</li> -->
      </ul>
    </div>
  </div>
</template>
<script>
import TwitterIcon from './Icons/TwitterIcon.vue'
import LinkedinIcon from './Icons/LinkedinIcon.vue'
import GitHubIcon from './Icons/GitHubIcon.vue'
// JS
export default {
  components: { TwitterIcon, LinkedinIcon, GitHubIcon },
  data() {
    return {
      currentDate: new Date,
    }
  },
}
</script>
