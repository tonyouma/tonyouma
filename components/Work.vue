<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2``">
    <div
      class="bg-white p-4 rounded-lg transition-all ease-in-out duration-1000"
    >
      <p class="text-2xl">Frontend Developer</p>
      <div class="py-3">
        <a href="https://brck.com/" rel="no-opener" target="_blank">
          <BrckLogo />
        </a>
      </div>
      <p class="text-sm text-gray-400 flex gap-x-3 items-center">
        <span><CalendarIcon /> </span>May 2019 - September 2019
      </p>
      <ul class="mt-4">
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
          inventore.
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
          inventore.
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
          inventore.
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
          inventore.
        </li>
      </ul>
    </div>
    <div
      class="bg-white p-4 rounded-lg transition-all ease-in-out duration-1000"
    ></div>
  </div>
</template>
<script>
import BrckLogo from './Icons/BrckLogo.vue'
import CalendarIcon from './Icons/CalendarIcon.vue'
export default {
  components: { BrckLogo, CalendarIcon },
}
</script>
