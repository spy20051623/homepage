<template>
  <el-container style="height: 100%">
    <el-header height="100px">
      <span style="font-family: Consolas; font-size: 24px">Welcome to Spy's Website!</span>
    </el-header>
    <el-container>
      <el-aside width="150px">
        <el-menu :default-active="1" v-model="menuActive">
          <el-menu-item index="1" @click="menuActive='1'"><span>杭电小工具</span></el-menu-item>
          <el-menu-item index="2" @click="menuActive='2'"><span>忘川风华录</span></el-menu-item>
          <el-menu-item index="3" @click="menuActive='3'">3</el-menu-item>
          <el-menu-item index="4" @click="menuActive='4'">4</el-menu-item>
          <el-menu-item index="5" @click="menuActive='5'">5</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table :data="getData(menuActive)" :show-header="false" :stripe="true">
          <el-table-column prop="val" align="center"/>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    getData(idx) {
      if (idx === '1')
        return Array(
            {val: <el-link href="https://www.baidu.com" type="primary">baidu</el-link>}
        );
      else if (idx === '2') {
        return Array(
            {val: <el-link href="wangchuan/calculate/" type="primary">数值计算器</el-link>},
            {val: <el-link href="wangchuan/wangchuan.pdf" type="primary">数值计算说明文档</el-link>},
            {val: <el-link href="wangchuan/mid-autumn" type="primary">中秋活动工具</el-link>}
        );
      } else
        return Array();
    }
  },
  data() {
    return {
      menuActive: '1',
    }
  }
}
</script>

<style>
.el-header {
  text-align: center;
  background-color: #81e7ff;
  line-height: 100px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
}

.el-main {
  text-align: center;
  background-color: #c6f7ff;
  line-height: 160px;
}

.el-menu {
  text-align: center;
  background-color: #a9eeff;
  height: 100%;
}

.el-table {
  text-align: center;
  background-color: lightcyan;
  height: 100%;
}

span {
  width: 100% !important;
  float: left !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: normal !important;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>