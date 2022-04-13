<template>
  <a :href="href" target="_blank" class="flex gap-x-2 items-center">
    <!-- <slot name="icon"> </slot> -->
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
    // icon: {
    //   type: Function,
    //   default: '',
    // },

  },
}
</script>
<style></style>
