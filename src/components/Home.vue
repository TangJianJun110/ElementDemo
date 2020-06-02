<template>
  <div class="home">
    <vheader></vheader>
    <sidebar></sidebar>
    <div class="luyou" :class="{'content-collapse':collapse}">
      <tags></tags>
      <router-view />
    </div>
  </div>
</template>

<script>
import vheader from "./Header"
import sidebar from "./Sidebar"
import tags from "./Tags"
import bus from './bus'
export default {
  data() {
    return {
      tagsList:[],
      collapse:false
    };
  },
  components: {
    vheader,
    sidebar,
    tags
    
  },
  created(){
    bus.$on('collapse-content',msg=>{
      this.collapse=msg;
    });
    bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.luyou {
  position: relative;
  left: 250px;
  height: 100%;
}
.content-collapse{
  left: 65px;
}
</style>
