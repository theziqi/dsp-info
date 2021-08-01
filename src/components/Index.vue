<template>
  <div id="index">
    <a-carousel effect="fade" arrows autoplay>
      <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div v-for="(img,i) in cImgs" :key="i">
        <img :src="img" :alt="i" height="100%" width="80%" style="margin:0 auto">
      </div>
    </a-carousel>
    <div class="i-content">
      <p>《数字信号处理》课程作为电子信息类专业的大二学生的核心基础课，紧密贴合“培养具有创新创业意识和终身学习能力的信息通信领域高级专业技术人才或领军型人才”的人才培养宗旨，以学生发展为中心、以产出为导向。结合5G/6G/AI等信号处理前沿领域的实例，加深对抽象理论知识的认识，增强学生爱国情怀，激发学生学习动力，培养学生自信心。通过课程学习，学生将掌握确定性离散时间信号的频谱分析原理及快速实现方法，数字滤波器的设计及实现方法等相关知识；学生会利用信号处理的基本原理分析和解决信息通信领域复杂工程问题的能力、创新思考能力；在综合素质方面，做到知识传授与价值引领有机统一，帮助学生树立辩证唯物主义的自然观、科学技术方法论和科技工程观，树立爱国情怀和信息领域的专业使命感。</p>
      <p>《数字信号处理》有一支优秀的教学队伍。课程组有约20名教师，每年承担全校2000多学生和20名留学生的教学任务。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
      return {
          cImgs: [
            'DSP_picture/index/1.jpg',
            'DSP_picture/index/2.jpg',
            'DSP_picture/index/3.jpg',
            'DSP_picture/index/4.jpg',
            'DSP_picture/index/5.jpg',
            'DSP_picture/index/6.jpg',
            'DSP_picture/index/7.jpg',
            'DSP_picture/index/8.jpg'
          ]
      }
  }
}
</script>


<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 500px;
  line-height: 500px;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #0446cb;
  opacity: 0.7;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}
.i-content {
  margin-top: 20px;
  font-size: 16px;
  margin-bottom: 10px;
  text-indent: 2em;
}
</style>
