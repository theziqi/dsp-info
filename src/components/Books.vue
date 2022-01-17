<template>
  <div id="books">
    <div class="WordSection1" style="layout-grid:15.6pt">
      <div class="i-title">中文教材</div>

      <p>
        门爱东、苏菲、王雷、王海婴、李江军编著,《数字信号处理》（第二版），科学出版社，2009
      </p>
      <p>
        本教材总结多年实际教学经验后整理而成。教材紧密结合数字信号处理的发展，注重经典与现代相结合、基本理论与工程技术相结合、数学分析与计算机辅助方法相结合。内容充实，讨论全面，条理清晰，重点突出，语言简洁流畅，通俗易懂，文字图表规范。
      </p>
      <p>本教材具有以下特色和创新：</p>
      <p>
        1.&nbsp;&nbsp;紧密结合数字信号处理技术的发展与实际应用，教材内容全面、准确地反映了本学科的基本理论、概念和国内外科学研究和教学研究的前沿成果。根据工科类专业本科生的培养目标，系统地介绍了数字信号处理基本原理、基本概念与基本分析方法，内容充实,讨论全面，分析透彻，易于理解。
        同时注意吸收新理论、新技术成果在人才培养中的作用，重点突出，层次分明。
      </p>
      <p>
        2.&nbsp;&nbsp;专业特色鲜明，系统性突出教材内容符合当前数字信号处理技术应用发展现状和教学规律，从当前的教学与学生学习实际出发，考虑学生使用教材的感受，由浅入深、循序渐进地阐述数字信号处理基本理论及相关数字信号处理开发的基础知识，条理清晰，重点突出，结构简洁，便于与相关课程的衔接。
      </p>
      <p>
        3.&nbsp;&nbsp;突出案例教学，重视实践环节，通过相关的工程应用实例来介绍数字信号处理的基本原理和算法，将理论与应用相融合，在学习理论知识的同时，强化学生的工程应用能力，并将MATLAB软件引入到教学中，通过例题、习题与实验，全面提升学生解决实际应用问题的能力，为培养创新型工程技术人才打下坚实的基础。
      </p>
      <p>
        4.&nbsp;&nbsp;配有大量例题、习题，并给出了部分插图的绘图程序和部分例题的求解Matlab程序，行文流畅，可读性强,
        便于自学。
      </p>
      <div class="i-img">
        <img width="300" src="../assets/zwjc.jpg" alt="中文教材" />
      </div>

      <div class="i-title">英文教材</div>

      <p>
        张建华，许晓东，孙松林改编，“Understanding Digital Signal
        Processing”，电子工业出版社
      </p>

      <div class="i-img">
        <img width="400" src="../assets/ywjc.jpg" alt="英文教材" />
      </div>

      <div class="i-title">参考书目</div>

      <p>[1] 陈后金,《数字信号处理》(第三版)，高等教育出版社，2018</p>
      <p>[2] 程佩清,《数字信号处理教程》(第五版)，清华大学出版社，2017</p>
      <p>
        [3]
        胡广书,《数字信号处理：理论、算法与实现》（第三版），清华大学出版社，2012
      </p>
      <p>
        [4] 彭启琮译,《数字信号处理：基于计算机的方法》（第4版） [Digital Signal
        Processing A Computer-Based Approach(Fourth
        Edition)]，清华大学出版社，2012
      </p>

      <div class="i-title">在线资源</div>
      <p>
        MIT Open Course:&nbsp;&nbsp;<a
          href="http://ocw.mit.edu/resources/res-6-008-digital-signal-processing-spring-2011/"
          >http://ocw.mit.edu/resources/res-6-008-digital-signal-processing-spring-2011/</a
        >
      </p>
      <p>
        Coursera:&nbsp;&nbsp;<a href="https://www.coursera.org/learn/dsp"
          >https://www.coursera.org/learn/dsp</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Books",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#books {
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
