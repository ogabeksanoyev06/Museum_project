<template>
  <div class="carusel-one shadow">
    <slot></slot>
    <el-button
      @click="next"
      type="light"
      class="next"
      icon="el-icon-arrow-right"
      circle
    ></el-button>
    <el-button
      @click="prev"
      type="light"
      class="prev"
      icon="el-icon-arrow-left"
      circle
    ></el-button>
  </div>
</template>
<script>
export default {
  watch: {},
  props: {},
  name: "caruselOne",
  data() {
    return {};
  },
  method: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>
<style scoped>
.carusel-one {
  display: flex;
  align-items: center;
  position: relative;
  background-color: #f3f9ff;
  padding: 30px;
  width: 100%;
  min-height: 500px;
  height: 100%;

  overflow: hidden;
}
button {
  position: absolute !important;
  overflow: hidden;
  top: calc(50% - 40px);
  margin: 0 !important;
  transition: 0.9 ease;
}
button:active {
  transform: translateY(30px);
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
</style>
