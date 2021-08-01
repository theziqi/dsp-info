<template>
  <div id="courseware">
    <p>
      <router-link to="/read/c-matlab">Matlab简介.pdf</router-link>
    </p>
    <p>
      <router-link to="/read/c-chapter1">第一章 引论.pdf</router-link>
    </p>
    <p>
      <router-link to="/read/c-chapter2">第二章 离散时间系统.pdf</router-link>
    </p>
    <p>
      <router-link to="/read/c-chapter3"
        >第三章 离散傅里叶变换及其快速计算方法.pdf</router-link
      >
    </p>
    <p>
      <router-link to="/read/c-chapter4">第四章 IIR滤波器设计.pdf</router-link>
    </p>
    <p>
      <router-link to="/read/c-chapter5"
        >第五章 FIR数字滤波器设计和实现.pdf</router-link
      >
    </p>
    <p>
      <router-link to="/read/c-chapter6">第六章 多速率信号处理.pdf</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Courware",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#courseware {
  margin-left: 200px;
}
p {
  font-size: 20px;
}
</style>
