<template>
  <div class="sidebar">
    <el-menu
      default-active="onRoutes"
      :collapse="collapse"
      class="el-menu-vertical-demo"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      router
    >
      <!--循环渲染一级菜单-->
      <template v-for="item in NavBarList">
        <!--一级菜单有子菜单-->
        <!--渲染一级菜单-->
        <el-submenu v-if="item.children" :index="item.index" :key="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <!--渲染二级-->
          <template v-for="subs in item.children">
            <!--二级有子菜单-->
            <!--渲染二级菜单 开始-->
            <el-submenu v-if="subs.children" :index="subs.index" :key="subs.index">
              <template slot="title">
                <i :class="subs.icon"></i>
                <span slot="title">{{ subs.title }}</span>
              </template>
              <!--渲染三级菜单 开始-->
              <template v-for="sub in subs.children">
                <el-menu-item :key="sub.index" :index="sub.index">
                  <i :class="sub.icon"></i>
                  <span slot="title">{{ sub.title }}</span>
                </el-menu-item>
              </template>
              <!--渲染三级菜单 结束-->
            </el-submenu>
            <!--渲染二级菜单 结束-->
            <!--二级没有子菜单-->
            <template v-else>
              <!--渲染二级菜单 开始-->
              <el-menu-item :key="subs.index" :index="subs.index">
                <i :class="subs.icon"></i>
                <span slot="title">{{ subs.title }}</span>
              </el-menu-item>
              <!--渲染二级菜单 结束-->
            </template>
          </template>
        </el-submenu>
        <!--一级菜单没有子菜单-->
        <template v-else>
          <!--渲染一级菜单-->
          <el-menu-item :key="item.index" :index="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import bus from './bus'
export default {
  data() {
    return {
      collapse:false,
      NavBarList: [
        {
          icon: "el-icon-edit",
          title: "系统首页",
          index: "shouye"
        },
        {
          icon: "el-icon-eleme",
          title: "表单相关",
          index: "form",
          children: [
            {
              title: "基础表单",
              index: "baseform"
            }
          ]
        },
        {
          icon: "el-icon-star-on",
          title: "一级菜单",
          index: "firstmenu",
          children: [
            {
              title: "二级菜单",
              index: "secondmenu",
              children: [
                {
                  title: "三级菜单",
                  index: "thirdmenu"
                }
              ]
            },
            {
              title: "测试菜单",
              index: "testmenu"
            }
          ]
        },
        {
          icon: "el-icon-potato-strips",
          index: "icon",
          title: "自定义图标"
        },
        {
          icon: "el-icon-lollipop",
          index: "charts",
          title: "schart图表"
        },
        {
          icon: "el-icon-rank",
          index: "tuozhuai",
          title: "拖拽组件",
          subs: [
            {
              index: "drag",
              title: "拖拽列表"
            },
            {
              index: "dialog",
              title: "拖拽弹框"
            }
          ]
        }
      ]
    };
  },
  methods: {},
  created(){
    bus.$on('collapse',msg=>{
      this.collapse=msg;
      bus.$emit('collapse-content',msg);
    })
  }
};
</script>
<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>