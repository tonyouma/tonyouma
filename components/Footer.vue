<template>
  <div class="">
    <div class="flex justify-between w-full mb-12 text-sm text-gray-500">
      <div>
        <p class="">&copy; Copyright {{ currentDate.getFullYear() }}</p>
      </div>
      <ul class="gap-x-10 flex">
        <SocialMedia
          v-for="link in socialLinks"
          :key="link.title"
          :title="link.title"
          :href="link.href"
        />
      </ul>
    </div>
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
          icon: 'myIcon',
          href: 'https://twitter.com/_tonyouma',
        },
        {
          title: 'Linkedin',
          icon: 'myIcon',
          href: 'https://linkedin.com/in/tonyouma/',
        },
        {
          title: 'GitHub',
          icon: 'myIcon',
          href: 'http://github.com/TonyOuma',
        },
      ],
    }
  },
}
</script>
