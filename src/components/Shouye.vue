<template>
  <div class="shouye">
    <el-card class="box-card" shadow="hover" style="height:252px;">
      <div class="item">
        <img src="../assets/28.jpg" style="width:120px;height:120px;border-radius:50%;" />
        <div class="text">
          <div class="admin">{{name}}</div>
          <div>{{role}}</div>
        </div>
      </div>
      <div class="time">
        上次登录时间：
        <span>2019-11-01</span>
      </div>
      <div class="time">
        上次登录地点：
        <span>东莞</span>
      </div>
    </el-card>
    <el-card shadow="hover" style="height:403px;width: 61%;float: left;margin-left: 10px;">
      <div slot="header" class="clearfix">
        <span>待办事项</span>
        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
      </div>
      <el-table :data="tableData" :show-header="false" :tooltip-effect="dark" style="width: 100%">
        <el-table-column width="40">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.status"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <div @click="checkBox(scope)"
              class="table-item"
              :class="{'table-item-del': scope.row.status}"
            >{{scope.row.title}}</div>
          </template>
        </el-table-column>
        <el-table-column width="60">
          <template>
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "admin",
      tableData: [
        {
          title: "今天要修复100个bug",
          status: false
        },
        {
          title: "今天要修复100个bug",
          status: false
        },
        {
          title: "今天要写100行代码加几个bug吧",
          status: false
        },
        {
          title: "今天要修复100个bug",
          status: false
        },
        {
          title: "今天要修复100个bug",
          status: true
        },
        {
          title: "今天要写100行代码加几个bug吧",
          status: true
        }
      ]
    };
  },
  methods:{
      checkBox(scope){
          scope.row.status=!scope.row.status;
      }
  },
  computed: {
    role() {
      return this.name === "admin" ? "超级管理员" : "普通用户";
    }
  }
};
</script>
<style scoped>
.shouye {
  padding: 10px;
  margin: 0;
}
.item {
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
  display: flex;
  -webkit-box-align: center;
}
.text {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}
.box-card {
  width: 480px;
  float: left;
}
.admin {
  display: inline-block;
  font-size: 30px;
  color: #222;
}
.time {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}
.time > span {
  margin-left: 70px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.table-item-del{
  text-decoration: line-through;
  color: #999;
}
</style>