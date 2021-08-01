<template>
  <div id="read">
    <div class="r-top-block">
      <div class="back-block" @click="onBack">
        <span>
          <a-icon type="left" />
        </span>
        <span>返回</span>
      </div>
      <div v-if="rDownloadLink" class="download-block">
        <span><a-icon type="arrow-down"/></span>
        <span><a :href="rDownloadLink" :download="rDownloadName">下载</a></span>
      </div>
    </div>
    <div class="i-title">{{ rTitle }}</div>
    <iframe :src="loadPDF(rSrc)" width="100%" height="800" />
    <!-- <div class="pdf" v-show="fileType === 'pdf'">
      <pi class="arrow">
        <span
          @click="changePdfPage(0)"
          class="turn"
          :class="{ grey: currentPage == 1 }"
          >Preview</span
        >
        {{ currentPage }} / {{ pageCount }}
        <span
          @click="changePdfPage(1)"
          class="turn"
          :class="{ grey: currentPage == pageCount }"
          >Next</span
        >
      </p>
      <pdf
        :src="rSrc"
        :page="currentPage"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
        @loaded="loadPdfHandler"
      >
      </pdf>
    </div> -->
  </div>
</template>

<script>
// import pdf from "vue-pdf";
export default {
  name: "Read",
  components: {
    //   pdf,
  },
  data() {
    return {
      rTitle: "",
      rSrc: "",
      rDownloadLink: "",
      rDownloadName: "",
      readList: [
        {
          rid: "c-matlab",
          rSrc: "../../download/courseware/matlab.pdf",
          rTitle: "Matlab简介.pdf",
        },
        {
          rid: "c-chapter1",
          rSrc: "../../download/courseware/chapter1.pdf",
          rTitle: "第一章 引论.pdf",
        },
        {
          rid: "c-chapter2",
          rSrc: "../../download/courseware/chapter2.pdf",
          rTitle: "第二章 离散时间系统.pdf",
        },
        {
          rid: "c-chapter3",
          rSrc: "../../download/courseware/chapter3.pdf",
          rTitle: "第三章 离散傅里叶变换及其快速计算方法.pdf",
        },
        {
          rid: "c-chapter4",
          rSrc: "../../download/courseware/chapter4.pdf",
          rTitle: "第四章 IIR滤波器设计.pdf",
        },
        {
          rid: "c-chapter5",
          rSrc: "../../download/courseware/chapter5.pdf",
          rTitle: "第五章 FIR数字滤波器设计和实现.pdf",
        },
        {
          rid: "c-chapter6",
          rSrc: "../../download/courseware/chapter6.pdf",
          rTitle: "第六章 多速率信号处理.pdf",
        },
        {
          rid: "e-exerclass",
          rSrc: "../../download/exercises/exercises.pdf",
          rTitle: "习题课.pdf",
        },
        {
          rid: "p-paper1",
          rSrc: "../../download/testpaper/paper1.pdf",
          rTitle: "DSP试卷及答案-样例1.pdf",
        },
        {
          rid: "p-paper2",
          rSrc: "../../download/testpaper/paper2.pdf",
          rTitle: "DSP试卷及答案-样例2.pdf",
        },
        {
          rid: "v-chapter1-1",
          rSrc: "../../video/第一章-绪论-DSP的定义、特点和应用.pdf",
          rTitle: "第一章-绪论-DSP的定义、特点和应用.pdf",
          rDownloadLink:
            "DSP_picture/video/第一章-绪论-DSP的定义、特点和应用.pptx",
          rDownloadName: "第一章-绪论-DSP的定义、特点和应用.pptx",
        },
        {
          rid: "v-chapter1-2",
          rSrc: "../../video/第一章-绪论-数学知识回顾.pdf",
          rTitle: "第一章-绪论-数学知识回顾.pdf",
          rDownloadLink: "DSP_picture/video/第一章-绪论-数学知识回顾.pptx",
          rDownloadName: "第一章-绪论-数学知识回顾.pptx",
        },
        {
          rid: "v-chapter2-1",
          rSrc: "../../video/第二章-采样和内插.pdf",
          rTitle: "第二章-采样和内插.pdf",
          rDownloadLink: "DSP_picture/video/第二章-采样和内插.pptx",
          rDownloadName: "第二章-采样和内插.pptx",
        },
        {
          rid: "v-chapter2-2",
          rSrc: "../../video/第二章-离散时间序列及系统.pdf",
          rTitle: "第二章-离散时间序列及系统.pdf",
          rDownloadLink: "DSP_picture/video/第二章-离散时间序列及系统.pptx",
          rDownloadName: "第二章-离散时间序列及系统.pptx",
        },
        {
          rid: "v-chapter2-3",
          rSrc: "../../video/第二章-离散系统的差分方程及信号流图.pdf",
          rTitle: "第二章-离散系统的差分方程及信号流图.pdf",
          rDownloadLink:
            "DSP_picture/video/第二章-离散系统的差分方程及信号流图.pptx",
          rDownloadName: "第二章-离散系统的差分方程及信号流图.pptx",
        },
        {
          rid: "v-chapter2-4",
          rSrc: "../../video/第二章-DTFT定义及性质.pdf",
          rTitle: "第二章-DTFT定义及性质.pdf",
          rDownloadLink: "DSP_picture/video/第二章-DTFT定义及性质.pptx",
          rDownloadName: "第二章-DTFT定义及性质.pptx",
        },
        {
          rid: "v-chapter2-5",
          rSrc: "../../video/第二章-Z变换.pdf",
          rTitle: "第二章-Z变换.pdf",
          rDownloadLink: "DSP_picture/video/第二章-Z变换.pptx",
          rDownloadName: "第二章-Z变换.pptx",
        },
        {
          rid: "v-chapter2-6",
          rSrc: "../../video/第二章-Z反变换.pdf",
          rTitle: "第二章-Z反变换.pdf",
          rDownloadLink: "DSP_picture/video/第二章-Z反变换.pptx",
          rDownloadName: "第二章-Z反变换.pptx",
        },
        {
          rid: "v-chapter2-7",
          rSrc: "../../video/第二章-系统函数、零极点.pdf",
          rTitle: "第二章-系统函数、零极点.pdf",
          rDownloadLink: "DSP_picture/video/第二章-系统函数、零极点.pptx",
          rDownloadName: "第二章-系统函数、零极点.pptx",
        },
        {
          rid: "v-chapter3-1",
          rSrc: "../../video/第三章-DFS的定义及性质.pdf",
          rTitle: "第三章-DFS的定义及性质.pdf",
          rDownloadLink: "DSP_picture/video/第三章-DFS的定义及性质.pptx",
          rDownloadName: "第三章-DFS的定义及性质.pptx",
        },
        {
          rid: "v-chapter3-2",
          rSrc: "../../video/第三章-DFT定义及性质.pdf",
          rTitle: "第三章-DFT定义及性质.pdf",
          rDownloadLink: "DSP_picture/video/第三章-DFT定义及性质.pptx",
          rDownloadName: "第三章-DFT定义及性质.pptx",
        },
        {
          rid: "v-chapter3-3",
          rSrc: "../../video/第三章-循环卷积.pdf",
          rTitle: "第三章-循环卷积.pdf",
          rDownloadLink: "DSP_picture/video/第三章-循环卷积.pptx",
          rDownloadName: "第三章-循环卷积.pptx",
        },
        {
          rid: "v-chapter3-4",
          rSrc: "../../video/第三章-重叠保留和重叠相加法.pdf",
          rTitle: "第三章-重叠保留和重叠相加法.pdf",
          rDownloadLink: "DSP_picture/video/第三章-重叠保留和重叠相加法.pptx",
          rDownloadName: "第三章-重叠保留和重叠相加法.pptx",
        },
        {
          rid: "v-chapter3-6",
          rSrc: "../../video/第三章-DIF-FFT.pdf",
          rTitle: "第三章-DIF-FFT.pdf",
          rDownloadLink: "DSP_picture/video/第三章-DIF-FFT.pptx",
          rDownloadName: "第三章-DIF-FFT.pptx",
        },
      ],
      // currentPage: 0, // pdf文件页码
      // pageCount: 0, // pdf文件总页数
      // fileType: "pdf", // 文件类型
    };
  },
  created: function() {
    let rid = this.$route.params.rid;
    console.log(rid);
    let index = this.readList.findIndex((item) => item.rid === rid);
    this.rTitle = this.readList[index].rTitle;
    this.rSrc = this.readList[index].rSrc;
    this.rDownloadLink = this.readList[index].rDownloadLink;
    this.rDownloadName = this.readList[index].rDownloadName;
    // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
    // this.rSrc = pdf.createLoadingTask(this.rSrc);
    console.log(index);
  },
  methods: {
    loadPDF(url) {
      // url即为pdf地址
      return (
        "DSP_picture/pdfjs/web/viewer.html?file=" + encodeURIComponent(url)
      );
    },
    onBack: function() {
      this.$router.go(-1);
    },
    // // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    // changePdfPage(val) {
    //   // console.log(val)
    //   if (val === 0 && this.currentPage > 1) {
    //     this.currentPage--;
    //     // console.log(this.currentPage)
    //   }
    //   if (val === 1 && this.currentPage < this.pageCount) {
    //     this.currentPage++;
    //     // console.log(this.currentPage)
    //   }
    // },
    // // pdf加载时
    // loadPdfHandler() {
    //   this.currentPage = 1; // 加载的时候先加载第一页
    // },
  },
};
</script>

<style lang="less" scoped>
#read {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.i-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}
.r-top-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .back-block {
    cursor: pointer;
    span:first-child {
      margin-right: 5px;
    }
  }
  .download-block {
    cursor: pointer;
    span:first-child {
      margin-right: 5px;
    }
    span:last-child {
      a {
        text-decoration: none; /* 去除默认的下划线 */
        outline: none; /* 去除旧版浏览器的点击后的外虚线框 */
        color: rgba(0, 0, 0, 0.65); /* 去除默认的颜色和点击后变化的颜色 */
      }
    }
  }
}
</style>
