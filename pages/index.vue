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
import Hero from '../components/Hero.vue'
import Projects from '../components/Projects.vue'
export default { components: { Hero, Projects } }
</script>

<style>
html {
  font-family: 'Avenir Next LT Pro';
}
</style>
