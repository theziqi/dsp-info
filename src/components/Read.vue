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
          rid: "An_Introduction_to_the_Kalman_Filter",
          rSrc:
            "../../download/paper/basic/An_Introduction_to_the_Kalman_Filter.pdf",
          rTitle: "An_Introduction_to_the_Kalman_Filter.pdf",
        },
        {
          rid: "Certain_Topics_in_Telegraph_Transmission_Theory",
          rSrc:
            "../../download/paper/basic/Certain_Topics_in_Telegraph_Transmission_Theory.pdf",
          rTitle: "Certain_Topics_in_Telegraph_Transmission_Theory.pdf",
        },
        {
          rid: "Interpolated_finite_impulse_response_filters",
          rSrc:
            "../../download/paper/basic/Interpolated_finite_impulse_response_filters.pdf",
          rTitle: "Interpolated_finite_impulse_response_filters.pdf",
        },
        {
          rid: "On_optimal_infinite_impulse_response_edge_detection_filters",
          rSrc:
            "../../download/paper/basic/On_optimal_infinite_impulse_response_edge_detection_filters.pdf",
          rTitle:
            "On_optimal_infinite_impulse_response_edge_detection_filters.pdf",
        },
        {
          rid: "The_Fast_Fourier_Transform_and_Its_Applications",
          rSrc:
            "../../download/paper/basic/The_Fast_Fourier_Transform_and_Its_Applications.pdf",
          rTitle: "The_Fast_Fourier_Transform_and_Its_Applications.pdf",
        },
        {
          rid: "5G移动通信发展趋势与若干关键技术",
          rSrc:
            "../../download/paper/frontier/5G移动通信发展趋势与若干关键技术.pdf",
          rTitle: "5G移动通信发展趋势与若干关键技术.pdf",
        },
        {
          rid: "DSP技术的最新发展及其应用现状_魏晓云",
          rSrc:
            "../../download/paper/frontier/DSP技术的最新发展及其应用现状_魏晓云.pdf",
          rTitle: "DSP技术的最新发展及其应用现状_魏晓云.pdf",
        },
        {
          rid: "北斗卫星导航系统的进展、贡献与挑战",
          rSrc:
            "../../download/paper/frontier/北斗卫星导航系统的进展、贡献与挑战.pdf",
          rTitle: "北斗卫星导航系统的进展、贡献与挑战.pdf",
        },
        {
          rid: "基于DSP和FPGA的通用数字信号处理系统设计_彭宇",
          rSrc:
            "../../download/paper/frontier/基于DSP和FPGA的通用数字信号处理系统设计_彭宇.pdf",
          rTitle: "基于DSP和FPGA的通用数字信号处理系统设计_彭宇.pdf",
        },
        {
          rid: "卷积神经网络研究综述",
          rSrc: "../../download/paper/frontier/卷积神经网络研究综述.pdf",
          rTitle: "卷积神经网络研究综述.pdf",
        },
        {
          rid: "频率步进雷达数字信号处理_毛二可",
          rSrc:
            "../../download/paper/frontier/频率步进雷达数字信号处理_毛二可.pdf",
          rTitle: "频率步进雷达数字信号处理_毛二可.pdf",
        },
        {
          rid:
            "AlexNet_ImageNet_Classification_with_Deep_Convolutional_Neural_Networks",
          rSrc:
            "../../download/paper/frontier/AlexNet_ImageNet_Classification_with_Deep_Convolutional_Neural_Networks.pdf",
          rTitle:
            "AlexNet_ImageNet_Classification_with_Deep_Convolutional_Neural_Networks.pdf",
        },
        {
          rid:
            "Faster_R-CNN_Towards_Real-Time_Object_Detection_with_Region_Proposal_Networks",
          rSrc:
            "../../download/paper/frontier/Faster_R-CNN_Towards_Real-Time_Object_Detection_with_Region_Proposal_Networks.pdf",
          rTitle:
            "Faster_R-CNN_Towards_Real-Time_Object_Detection_with_Region_Proposal_Networks.pdf",
        },
        {
          rid: "GoogLENet_Going_Deeper_with_Convolutions",
          rSrc:
            "../../download/paper/frontier/GoogLENet_Going_Deeper_with_Convolutions.pdf",
          rTitle: "GoogLENet_Going_Deeper_with_Convolutions.pdf",
        },
        {
          rid:
            "Inception_v2_Batch_Normalization_Accelerating_Deep_Network_Training_by_Reducing_Internal_Covariate_Shift",
          rSrc:
            "../../download/paper/frontier/Inception_v2_Batch_Normalization_Accelerating_Deep_Network_Training_by_Reducing_Internal_Covariate_Shift.pdf",
          rTitle:
            "Inception_v2_Batch_Normalization_Accelerating_Deep_Network_Training_by_Reducing_Internal_Covariate_Shift.pdf",
        },
        {
          rid:
            "Inception_v3_Rethinking_the_Inception_Architecture_for_Computer_Vision",
          rSrc:
            "../../download/paper/frontier/Inception_v3_Rethinking_the_Inception_Architecture_for_Computer_Vision.pdf",
          rTitle:
            "Inception_v3_Rethinking_the_Inception_Architecture_for_Computer_Vision.pdf",
        },
        {
          rid: "ResNet_Deep_Residual_Learning_for_Image_Recognition",
          rSrc:
            "../../download/paper/frontier/ResNet_Deep_Residual_Learning_for_Image_Recognition.pdf",
          rTitle: "ResNet_Deep_Residual_Learning_for_Image_Recognition.pdf",
        },
        {
          rid: "U-Net_Convolutional_Networks_for_Biomedical_Image_Segmentation",
          rSrc:
            "../../download/paper/frontier/U-Net_Convolutional_Networks_for_Biomedical_Image_Segmentation.pdf",
          rTitle:
            "U-Net_Convolutional_Networks_for_Biomedical_Image_Segmentation.pdf",
        },
        {
          rid:
            "VGG_Very_Deep_Convolutional_Networks_for_Large-Scale_Image_Recognition",
          rSrc:
            "../../download/paper/frontier/VGG_Very_Deep_Convolutional_Networks_for_Large-Scale_Image_Recognition.pdf",
          rTitle:
            "VGG_Very_Deep_Convolutional_Networks_for_Large-Scale_Image_Recognition.pdf",
        },
        {
          rid: "YOLOv1_You_Only_Look_Once_Unified_Real-Time_Object_Detection",
          rSrc:
            "../../download/paper/frontier/YOLOv1_You_Only_Look_Once_Unified_Real-Time_Object_Detection.pdf",
          rTitle:
            "YOLOv1_You_Only_Look_Once_Unified_Real-Time_Object_Detection.pdf",
        },
        {
          rid: "YOLOv2_YOLO9000_Better_Faster_Stronger",
          rSrc:
            "../../download/paper/frontier/YOLOv2_YOLO9000_Better_Faster_Stronger.pdf",
          rTitle: "YOLOv2_YOLO9000_Better_Faster_Stronger.pdf",
        },
        {
          rid: "YOLOv3_An_Incremental_Improvement",
          rSrc:
            "../../download/paper/frontier/YOLOv3_An_Incremental_Improvement.pdf",
          rTitle: "YOLOv3_An_Incremental_Improvement.pdf",
        },
        {
          rid: "YOLOv4_Optimal_Speed_and_Accuracy_of_Object_Detection",
          rSrc:
            "../../download/paper/frontier/YOLOv4_Optimal_Speed_and_Accuracy_of_Object_Detection.pdf",
          rTitle: "YOLOv4_Optimal_Speed_and_Accuracy_of_Object_Detection.pdf",
        },
        {
          rid: "压缩感知-Compressed_sensing",
          rSrc: "../../download/paper/frontier/压缩感知-Compressed_sensing.pdf",
          rTitle: "压缩感知-Compressed_sensing.pdf",
        },
        {
          rid:
            "压缩感知-Robust_uncertainty_principles_exact_signal_reconstruction_from_highly_incomplete_frequency_information",
          rSrc:
            "../../download/paper/frontier/压缩感知-Robust_uncertainty_principles_exact_signal_reconstruction_from_highly_incomplete_frequency_information.pdf",
          rTitle:
            "压缩感知-Robust_uncertainty_principles_exact_signal_reconstruction_from_highly_incomplete_frequency_information.pdf",
        },
        {
          rid: "yongbuxiaoshidedianbo",
          rSrc: "../../download/practice/永不消逝的电波.pdf",
          rTitle: "永不消逝的电波.pdf",
        },
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
  background: rgba(255, 255, 255, 0.9);
  padding: 20px 20px;
  border: 1px #c9cce2e8 solid;
}
.i-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  width: 820px;
  text-align: center;
  word-wrap: break-word;
  word-break: normal;
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
