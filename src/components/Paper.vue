<template>
  <div id="paper">
    <div class="i-block">
      <div class="i-title">夯实基础</div>

      <p>
        <router-link to="/read/An_Introduction_to_the_Kalman_Filter"
          >An_Introduction_to_the_Kalman_Filter.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/Certain_Topics_in_Telegraph_Transmission_Theory"
          >Certain_Topics_in_Telegraph_Transmission_Theory.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/Interpolated_finite_impulse_response_filters"
          >Interpolated_finite_impulse_response_filters.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/On_optimal_infinite_impulse_response_edge_detection_filters"
          >On_optimal_infinite_impulse_response_edge_detection_filters.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/The_Fast_Fourier_Transform_and_Its_Applications"
          >The_Fast_Fourier_Transform_and_Its_Applications.pdf</router-link
        >
      </p>
    </div>
    <div class="i-block">
      <div class="i-title">前沿延伸</div>
      <p>
        <router-link to="/read/5G移动通信发展趋势与若干关键技术"
          >5G移动通信发展趋势与若干关键技术.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/DSP技术的最新发展及其应用现状_魏晓云"
          >DSP技术的最新发展及其应用现状_魏晓云.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/北斗卫星导航系统的进展、贡献与挑战"
          >北斗卫星导航系统的进展、贡献与挑战.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/基于DSP和FPGA的通用数字信号处理系统设计_彭宇"
          >基于DSP和FPGA的通用数字信号处理系统设计_彭宇.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/卷积神经网络研究综述"
          >卷积神经网络研究综述.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/频率步进雷达数字信号处理_毛二可"
          >频率步进雷达数字信号处理_毛二可.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/AlexNet_ImageNet_Classification_with_Deep_Convolutional_Neural_Networks"
          >AlexNet_ImageNet_Classification_with_Deep_Convolutional_Neural_Networks.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/Faster_R-CNN_Towards_Real-Time_Object_Detection_with_Region_Proposal_Networks"
          >Faster_R-CNN_Towards_Real-Time_Object_Detection_with_Region_Proposal_Networks.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/GoogLENet_Going_Deeper_with_Convolutions"
          >GoogLENet_Going_Deeper_with_Convolutions.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/Inception_v2_Batch_Normalization_Accelerating_Deep_Network_Training_by_Reducing_Internal_Covariate_Shift"
          >Inception_v2_Batch_Normalization_Accelerating_Deep_Network_Training_by_Reducing_Internal_Covariate_Shift.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/Inception_v3_Rethinking_the_Inception_Architecture_for_Computer_Vision"
          >Inception_v3_Rethinking_the_Inception_Architecture_for_Computer_Vision.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/ResNet_Deep_Residual_Learning_for_Image_Recognition"
          >ResNet_Deep_Residual_Learning_for_Image_Recognition.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/U-Net_Convolutional_Networks_for_Biomedical_Image_Segmentation"
          >U-Net_Convolutional_Networks_for_Biomedical_Image_Segmentation.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/VGG_Very_Deep_Convolutional_Networks_for_Large-Scale_Image_Recognition"
          >VGG_Very_Deep_Convolutional_Networks_for_Large-Scale_Image_Recognition.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/YOLOv1_You_Only_Look_Once_Unified_Real-Time_Object_Detection"
          >YOLOv1_You_Only_Look_Once_Unified_Real-Time_Object_Detection.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/YOLOv2_YOLO9000_Better_Faster_Stronger"
          >YOLOv2_YOLO9000_Better_Faster_Stronger.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/YOLOv3_An_Incremental_Improvement"
          >YOLOv3_An_Incremental_Improvement.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/YOLOv4_Optimal_Speed_and_Accuracy_of_Object_Detection"
          >YOLOv4_Optimal_Speed_and_Accuracy_of_Object_Detection.pdf</router-link
        >
      </p>
      <p>
        <router-link to="/read/压缩感知-Compressed_sensing"
          >压缩感知-Compressed_sensing.pdf</router-link
        >
      </p>
      <p>
        <router-link
          to="/read/压缩感知-Robust_uncertainty_principles_exact_signal_reconstruction_from_highly_incomplete_frequency_information"
          >压缩感知-Robust_uncertainty_principles_exact_signal_reconstruction_from_highly_incomplete_frequency_information.pdf</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paper",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#paper {
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
  p {
    margin: 5px auto;
  }
}
</style>
