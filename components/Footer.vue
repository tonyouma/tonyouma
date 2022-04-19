<template>
  <div
    class="grid md:grid-cols-2 md:flex-row w-full my-12 text-sm text-gray-500"
  >
    <div>
      <p class="flex">&copy; Copyright {{ currentDate.getFullYear() }}</p>
    </div>
    <ul class="gap-x-10 flex md:justify-end md:pt-0 pt-4 order-last">
      <SocialMedia
        v-for="link in socialLinks"
        :key="link.title"
        :title="link.title"
        :href="link.href"
        icon
        slot="icon"
      />
    </ul>
  </div>
</template>
<script>
import TwitterIcon from './Icons/TwitterIcon.vue'
import LinkedinIcon from './Icons/LinkedinIcon.vue'
import GitHubIcon from './Icons/GitHubIcon.vue'
import SocialMedia from './SocialMedia.vue'
// JS
export default {
  components: { TwitterIcon, LinkedinIcon, GitHubIcon, SocialMedia },
  data() {
    return {
      currentDate: new Date(),
      socialLinks: [
        {
          title: 'Twitter',
          icon: 'TwitterIcon',
          href: 'https://twitter.com/_tonyouma',
        },
        {
          title: 'Linkedin',
          icon: 'LinkedinIcon',
          href: 'https://linkedin.com/in/tonyouma/',
        },
        {
          title: 'GitHub',
          icon: 'GitHubIcon',
          href: 'https://github.com/TonyOuma',
        },
        {
          title: 'Peerlist',
          icon: 'myIcon',
          href: 'https://peerlist.io/tonyouma',
        },
      ],
    }
  },
}
</script>
