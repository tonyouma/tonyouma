<template>
  <a :href="href" target="_blank" class="flex gap-x-2 items-center">
    <span>{{ icon }} </span>
    <p class="">{{ title }}</p>
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: Function,
      default: '',
    },

  },
}
</script>
<style></style>
