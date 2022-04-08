<template>
  <div style="background: #f8f9fd" class="">
    <div class="container mx-auto">
      <div class="flex justify-center px-12">
        <div class="w-full xl:w-3/4 lg:w-11/12">
          <Navbar />
          <div class="">
            <Main />
          </div>
          <!-- <div class="mt-5">
            <Footer />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default { components: { Navbar, Footer } }
</script>

<style></style>
