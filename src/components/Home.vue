<template>
  <div class="home">
    <sidebar></sidebar>
    <div class="luyou">
      <router-view />
    </div>
  </div>
</template>

<script>
import sidebar from "./Sidebar";
export default {
  data() {
    return {};
  },
  components: {
    sidebar
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.luyou {
  position: relative;
  left: 250px;
  height: 100%;
}
</style>
