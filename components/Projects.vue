<template>
  <div>
    <!-- <p class="text-right">Projects</p> -->

    <div class="grid md:gap-10 gap-2 md:grid-cols-2 lg:grid-cols-2">
      <img :src="src" alt="Kachezwe Site Preview" class="" loading="lazy" />
      <div class="my-auto">
        <h3 class="text-xl font-semibold md:text-right">
          Kachezwe Web Application
        </h3>
        <p class="py-4 text-gray-600 md:text-right">
          Web application accessed via web browsers built on React. This is the
          interface for accessing players information and carrying out
          interactions
        </p>
        <span class="md:px-4 md:pt-6 flex items-center gap-x-2"
          ><LinkIcon />
          <a href="https://kachezwe.com" target="_blank" class="link"
            >kachezwe.com</a
          ></span
        >
        <p class="text-xs md:py-3 py-2 md:px-4">
          Design Credits:
          <a href="#" class="text-gray-600 pl-3">George S. Ralak</a>
        </p>
      </div>
    </div>
    <div
      class="grid md:gap-10 gap-2 md:grid-cols-2 lg:grid-cols-2 md:py-4 py-12"
    >
      <div class="my-auto order-last">
        <h3 class="text-xl font-semibold">Moja Website</h3>
        <p class="py-4 text-gray-600">Moja</p>
        <span class="md:pt-6 flex items-center gap-x-2"
          ><LinkIcon />
          <a href="https://moja-site.netlify.app/" target="_blank" class="link"
            >moja-site.netlify.app</a
          ></span
        >
        <p class="text-xs md:py-3 py-2">
          Design Credits:
          <a href="#" class="text-gray-600">George S. Ralak</a>
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/oumat/image/upload/v1649678642/tonyouma/projects/moja.png"
        alt="Kachezwe Site Preview"
        class="md:order-last"
        loading="lazy"
      />
    </div>
  </div>
</template>
<script>
import LinkIcon from './Icons/LinkIcon.vue'
export default {
  components: { LinkIcon },
  data() {
    return {
      src: this.$cloudinary.image.url('tonyouma/projects/kachezwe.png', {}),
      // src: this.$cloudinary.v2.api.resources({
      //   type: 'upload',
      //   prefix: 'tonyouma/projects', // add your folder
      // }),
      // function(error, result) { console.log(result, error) })
    }
  },
  methods: {
    getImages() {
      return this.$cloudinary.v2.api.resources(
        {
          type: 'upload',
          prefix: 'tonyouma/projects', // add your folder
        },
        function (error, result) {
          console.log(result, error)
        }
      )
    },
  },
}
</script>
<style scoped>
.link {
  color: #9a4eab;
}
</style>
