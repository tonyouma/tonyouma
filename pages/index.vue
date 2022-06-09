<template>
  <div style="background: #f8f9fd" class="">
    <div class="container mx-auto">
      <div class="flex justify-center md:px-12 px-6">
        <div class="w-full xl:w-3/4 lg:w-11/12">
          <Navbar />
          <div class="">
            <Main />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default { components: { Navbar, Footer } }
</script>

<style>
html {
  font-family: 'Avenir Next LT Pro';
}
</style>
