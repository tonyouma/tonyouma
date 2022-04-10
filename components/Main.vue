<template>
  <div class="">
    <div class="">
      <Hero />
    </div>
    <div>
      <Projects />
    </div>
  </div>
</template>
<script>
import Work from './Work.vue'
import SendIcon from './Icons/SendIcon.vue'
import Hero from './Hero.vue'
import Projects from './Projects.vue'
export default {
  components: { Work, SendIcon, Hero, Projects },
}
</script>
