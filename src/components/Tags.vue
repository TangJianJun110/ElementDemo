<template>
  <div class="tags">
    <ul>
      <li
        class="tags_li"
        v-for="(item,index) in tagsList"
        :class="{'active':isActive(item.path)}"
        :key="index"
      >
        <router-link :to="item.path" class="tags_li_title">{{item.title}}</router-link>
        <span class="tags-li-icon" @click="closeTags(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  setTags(route) {
    const isExist = this.tagsList.some(item => {
      return item.path === route.fullPath;
    });
    if (!isExist) {
      if (this.tagsList.length >= 8) {
        this.tagsList.shift();
      }
      this.tagsList.push({
        title: route.meta.title,
        path: route.fullPath,
        name: route.matched[1].components.default.name
      });
    }
    bus.$emit("tags", this.tagsList);
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    }
  }
};
</script>
<style scoped>
.tags {
  position: relative;
  height: 30px;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}
</style>