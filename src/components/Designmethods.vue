<template>
  <div id="designmethods">
    <div>
      <div class="i-title">教学设计</div>
      <div class="i-content">
        <p>
          教学设计从知识、能力和素质三个方面全面提升，构建“三合一体化”教学模式。
        </p>
        <p>
          基本思想是从以教师为主体的“教”转变为以学生为主体的“育”；质量为本，思政与专业结合、理论与实践结合、线上与线下结合的
          “三合”教学方法；将价值塑造、知识传授和能力培养三者融为一体，建设“一体化”的教学内容。具体来讲，就是以自然辩证法为指导进行价值塑造，以基本原理和方法为主体进行知识传授，立足科教融合，聚焦5G/AI前沿研究与热点应用、通过探究式实验，重点对实践创新能力进行培养。
        </p>
      </div>
      <div class="i-img">
        <img width="800" src="../assets/jxsj.png" alt="教学设计" />
      </div>
    </div>
    <div class="i-block">
      <div class="i-title">教学方法</div>
      <div class="i-content">
        教学方法上坚持质量为本，以立德树人为根本任务，做到知识传授与价值引领有机统一。线下加强问-答、启发-思考等传统课堂互动方式；线上弹幕、讨论区、调查问卷等加强与学生的实时在线互动。实践教学采用
        “课前Mooc，课上Discuss，课后Project”的模式，通过探究式实验大作业来开展，加深学生对信号分析、滤波器设计等知识的理解。针对新理论与新技术不断涌现，及时更新教学内容。逐步将图像的上/下采样技术、微信语音处理与传输手段、FFT在5G中的应用、5G频谱共享技术原理等前沿和热点学术研究或应用成果作为案例引入课程教学，探索科教融合方法，加强“一体化”教学内容的前沿性。
      </div>
      <div class="i-img">
        <img width="800" src="../assets/jxff.png" alt="教学方法" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Designmethods",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#designmethods {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px 20px;
  border: 1px #c9cce2e8 solid;
}
.i-block {
  margin-bottom: 15px;
}
.i-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}
.i-s-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
.i-content {
  font-size: 16px;
  margin-bottom: 10px;
}
.i-img {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
