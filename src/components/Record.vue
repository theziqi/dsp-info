<template>
  <div id="record">
    <p>
      <router-link to="/video/shuoke">数字信号处理说课-苏菲</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter1-1"
        >第一章-绪论-DSP的定义、特点和应用</router-link
      >
    </p>
    <p>
      <router-link to="/read/v-chapter1-2"
        >第一章-绪论-数学知识回顾</router-link
      >
    </p>
    <p>
      <router-link to="/read/v-chapter2-1">第二章-采样和内插</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter2-2"
        >第二章-离散时间序列及系统</router-link
      >
    </p>
    <p>
      <router-link to="/read/v-chapter2-3"
        >第二章-离散系统的差分方程及信号流图</router-link
      >
    </p>
    <p>
      <router-link to="/read/v-chapter2-4">第二章-DTFT定义及性质</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter2-5">第二章-Z变换</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter2-6">第二章-Z反变换</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter2-7">第二章-系统函数、零极点</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter3-1">第三章-DFS的定义及性质</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter3-2">第三章-DFT定义及性质</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter3-3">第三章-循环卷积</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter3-4"
        >第三章-重叠保留和重叠相加法</router-link
      >
    </p>
    <p>
      <router-link to="/video/chapter3-5">第三章-DIT-FFT</router-link>
    </p>
    <p>
      <router-link to="/read/v-chapter3-6">第三章-DIF-FFT</router-link>
    </p>
    <p>
      <router-link to="/video/chapter4-1"
        >第四章-滤波器设计性能指标</router-link
      >
    </p>
    <p>
      <router-link to="/video/chapter4-2">第四章-幅度平方函数</router-link>
    </p>
    <p>
      <router-link to="/video/chapter4-3"
        >第四章-巴特沃斯滤波器设计</router-link
      >
    </p>
    <p>
      <router-link to="/video/chapter4-4">第四章-模拟频率变换</router-link>
    </p>
    <p>
      <router-link to="/video/chapter4-5">第四章-数字仿真</router-link>
    </p>
    <p>
      <router-link to="/video/chapter4-6">第四章-双线性变换</router-link>
    </p>
    <p>
      <router-link to="/video/chapter4-7">第四章-IIR滤波器结构</router-link>
    </p>
    <p>
      <router-link to="/video/chapter5-1"
        >第五章-FIR滤波器设计-线性相位特性</router-link
      >
    </p>
    <p>
      <router-link to="/video/chapter5-2"
        >第五章-FIR四类线性相位滤波器、零极点</router-link
      >
    </p>
    <p>
      <router-link to="/video/chapter5-3">第五章-窗函数法-1</router-link>
    </p>
    <p>
      <router-link to="/video/chapter5-4">第五章-窗函数法-2</router-link>
    </p>
    <p>
      <router-link to="/video/chapter5-5">第五章-FIR滤波器结构</router-link>
    </p>
    <p>
      <router-link to="/video/sampling">Sampling</router-link>
    </p>
    <p>
      <router-link to="/video/QaE">Quantization_and_Encoding</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Record",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
#record {
  margin-left: 200px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px 20px;
  border: 1px #c9cce2e8 solid;
}
p {
  font-size: 20px;
}
</style>
