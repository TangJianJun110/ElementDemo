<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <span class="logo">后台管理系统</span>
    <div class="header-right">
      <i class="el-icon-pear"></i>
      <i class="el-icon-ice-drink"></i>
      <img src="../assets/28.jpg" style="width:35px;height:35px;border-radius:50%;margin: 0 8px;" />
      <span style="font-size:15px">
        admin
        <i class="el-icon-caret-bottom"></i>
      </span>
    </div>
  </div>
</template>
<script>
import bus from './bus'
export default {
  data() {
    return {
      collapse: false
    };
  },
  methods: {
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    }
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
  }
};
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background-color: #242f42;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
  cursor: pointer;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
  height: 70px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.header-right i {
  margin-right: 9px;
}
.header-right {
  height: 70px;
}
</style>