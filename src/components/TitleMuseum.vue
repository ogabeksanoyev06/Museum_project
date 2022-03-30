<template>
  <div class="title_museum">
    <span>•Галерея</span>
  </div>
</template>
<script>
export default {
  name: "titleMuseum",
};
</script>
<style scoped>
.title_museum span {
  font-size: 60px;
  font-weight: bold;
  color: #0029ff;
}

@media (max-width: 768px) {
  .title_museum span {
    font-size: 25px;
  }
}
</style>
