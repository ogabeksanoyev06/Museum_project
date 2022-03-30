<template>
  <transition>
    <div v-show="visibleSlide === index" class="caruselSlide"><slot></slot></div>
  </transition>
</template>
<script>
export default {
  props: ["visibleSlide", "index"],
  name: "caruselSlide",
  data() {
    return {};
  },
};
</script>
<style scoped></style>
