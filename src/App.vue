<template>
  <div id="app">
    <!-- <vue-particles
      id="particles-js"
      color="#5E6DC4"
      :particle-opacity="0.5"
      :particles-number="70"
      :particle-size="4"
      shape-type="circle"
      lines-color="#4856A1"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="4"
      :lines-distance="150"
      :move-speed="5"
      :hover-effect="true"
      hover-mode="grab"
    ></vue-particles> -->
    <div id="top">
      <div style="width: 1100px;display: flex;">
        <div>
          <img
            src="./assets/bupt_xiaohui.png"
            style="width: 110px;"
            alt="北京邮电大学校徽"
          />
          <img
            src="./assets/bupt_name.png"
            style="width: 250px;margin-left: 15px;"
            alt="北京邮电大学"
          />
        </div>
        <div class="top-title">
          <div class="chinese">数字信号处理课程网站</div>
          <div class="english">Digital Signal Processing</div>
        </div>
      </div>
    </div>
    <div id="menu">
      <a-menu
        @click="handleClick"
        v-model="current"
        mode="horizontal"
        style="background-color: #006280;color:white"
      >
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
        <a-sub-menu title="课程实例与实践">
          <a-menu-item key="practice-qy">
            信号的取样
          </a-menu-item>
          <a-menu-item key="practice-iir">
            IIR滤波器
          </a-menu-item>
          <a-menu-item key="practice-fir">
            FIR滤波器
          </a-menu-item>
          <a-menu-item key="practice-tjs1">
            探究式实验一
          </a-menu-item>
          <a-menu-item key="practice-tjs2">
            探究式实验二
          </a-menu-item>
          <a-menu-item key="practice-tjs3">
            探究式实验三
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="evaluation">
          课程评价
        </a-menu-item>
        <a-sub-menu title="课程资源">
          <a-menu-item key="books">
            教材及参考书
          </a-menu-item>
          <!-- <a-menu-item key="plan">
            教学计划进度
          </a-menu-item> -->
          <a-menu-item key="courseware">
            多媒体课件
          </a-menu-item>
          <!-- <a-menu-item key="record">
            课程录像
          </a-menu-item> -->
          <a-menu-item key="exercises">
            习题
          </a-menu-item>
          <a-menu-item key="testpaper">
            试卷及答案
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="paper">
          论文选读
        </a-menu-item>
        <!-- <a-menu-item key="contact">
          在线交流
        </a-menu-item> -->

        <!-- <a-input-search placeholder="找不到想要的信息？" style="width: 200px" @search="onSearch" /> -->
      </a-menu>
    </div>
    <div id="content" ref="content">
      <router-view></router-view>
    </div>
    <div id="bottom" ref="bottom" :style="'margin-top: ' + btop + 'px'">
      <div>
        <span>邮箱：sufei@bupt.edu.cn</span>
        <span style="margin-left: 50px;">电话：+86-10 62283295</span>
        <span style="margin-left: 50px;"
          >地址：北京市海淀区北太平庄街道西土城路10号</span
        >
      </div>
      <div>版权所有 © 北京邮电大学</div>
    </div>
  </div>
</template>

<script>
// import Particles from "@/components/particles/index";

export default {
  name: "App",
  data() {
    return {
      current: ["index"],
      btop: 0,
      fullHeight: document.documentElement.clientHeight,
    };
  },
  created() {
    if (localStorage.prefix) {
      this.current = [localStorage.prefix];
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.handleResize);
    this.handleBottom();
  },
  updated: function() {
    this.handleBottom();
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  components: {
    // Particles,
  },
  methods: {
    handleClick(e) {
      localStorage.setItem("prefix", e.key);
      const prefix = e.key.split("-")[0];
      const part = e.key.split("-")[1];
      if (prefix == "practice") {
        this.$router
          .push({ name: prefix, params: { part: part } })
          .catch((err) => {
            console.log(err);
          });
        // this.$router.go(0);
      } else {
        this.$router.push({ name: e.key }).catch((err) => {
          console.log(err);
        });
      }
    },
    onSearch(e) {
      console.log("search", e);
    },
    handleResize() {
      this.fullHeight = document.documentElement.clientHeight;
    },
    handleBottom() {
      let that = this;
      this.$nextTick(() => {
        let content_b =
          that.$refs.content.offsetTop + that.$refs.content.offsetHeight;
        if (content_b < document.documentElement.clientHeight - 70) {
          // console.log(document.documentElement.clientHeight - 70 - content_b);
          that.btop = document.documentElement.clientHeight - content_b - 70;
        } else {
          that.btop = 0;
        }
      });
    },
  },
};
</script>

<style lang="less">
#app {
  background-color: #006280;
}
// #particles-js {
//   width: 100%;
//   height: calc(100%);
//   position: fixed;
//   z-index: -1;
// }
#menu {
  position: relative;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
#top {
  position: relative;
  background-color: #191970;
  padding: 30px 0;
  display: flex;
  justify-content: center;
}
#content {
  position: relative;
  margin: 20px auto;
  width: 1140px;
  font-size: 15px;
}
#bottom {
  position: relative;
  // top: 500px;
  // left: 0;
  width: 100%;
  // position: fixed;
  background-color: #191970;
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
    font-size: 40px;
  }
  .english {
    font-size: 20px;
  }
}
.ant-menu-item {
  font-size: 20px;
  padding: 0 20px;
}
.ant-menu-submenu-title {
  font-size: 20px;
}
// .ant-menu-item:hover,
// .ant-menu-item-active,
// .ant-menu-submenu-active,
// .ant-menu-item-selected {
//   color: white !important;
//   border-bottom: 2px solid white !important;
// }
// .ant-menu-submenu-title:hover {
//   color: white !important;
// }
</style>
