<template>
  <div id="app">
    <div id="top">
      <div style="width: 1100px;display: flex;">
        <img src="./assets/bupt_logo.png" style="width: 315px;" alt="北京邮电大学">
        <div class="top-title">
          <div class="chinese">数字信号处理课程网站</div>
          <div class="english">Digital Signal Processing</div>
        </div>
      </div>

    </div>
    <div id="menu">
      <a-menu @click="handleClick" v-model="current" mode="horizontal">
        <a-menu-item key="index">
          首页
        </a-menu-item>
        <a-menu-item key="introduction">
          课程简介
        </a-menu-item>
        <a-menu-item key="teachers">
          任课教师
        </a-menu-item>
        <a-menu-item key="outline">
          教学大纲
        </a-menu-item>
        <a-menu-item key="designmethods">
          教学设计与方法
        </a-menu-item>
        <a-menu-item key="practice">
          实践教学
        </a-menu-item>
        <a-menu-item key="evaluation">
          课程评价
        </a-menu-item>
        <a-sub-menu title="课程资源">
          <a-menu-item key="books">
            教材及参考书
          </a-menu-item>
          <a-menu-item key="plan">
            教学计划进度
          </a-menu-item>
          <a-menu-item key="courseware">
            多媒体课件
          </a-menu-item>
          <a-menu-item key="record">
            课程录像
          </a-menu-item>
          <a-menu-item key="exercises">
            习题
          </a-menu-item>
          <a-menu-item key="testpaper">
            试卷及答案
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="contact">
          在线交流
        </a-menu-item>

        <!-- <a-input-search placeholder="找不到想要的信息？" style="width: 200px" @search="onSearch" /> -->
      </a-menu>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
    <div id="bottom" :style="'top:' + (fullHeight - 70) + 'px'">

      <div>
        <span>邮箱：sufei@bupt.edu.cn</span>
        <span style="margin-left: 50px;">电话：+86-10 62283295</span>
        <span style="margin-left: 50px;">地址：北京市海淀区北太平庄街道西土城路10号</span>
      </div>
      <div>版权所有 © 北京邮电大学 </div>

    </div>
    <div style="width: 100%;height: 70px"></div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      current: ["index"],
      btop: 500,
      fullHeight: document.documentElement.clientHeight
    };
  },
  mounted: function(){
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function(){
    window.removeEventListener('resize', this.handleResize)
  },
  components: {
    // HelloWorld,
  },
  methods: {
    handleClick(e) {
      this.$router.push({name: e.key}).catch(err => {console.log(err)})

    },
    onSearch(e){
      console.log('search', e);
    },
    handleResize () {
      this.fullHeight = document.documentElement.clientHeight
    }
  }
};
</script>

<style lang="less">
#menu {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
#top {
  background-color: #0446cb;
  padding: 30px 0;
  display: flex;
  justify-content: center;
}
#content {
  margin: 20px auto;
  width: 1040px;
}
#bottom {
  top: 500px;
  left: 0;
  width: 100%;
  position: fixed;
  background-color: #0446cb;
  padding: 5px 0;
  color: white;
  font-size: 14px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 300px;
  .chinese {
    font-size: 30px;
  }
  .english {
    font-size: 15px;
  }
}
.ant-menu-item {
  font-size: 20px;
  padding: 0 20px;
}
.ant-menu-submenu-title {
  font-size: 20px;
}
</style>
