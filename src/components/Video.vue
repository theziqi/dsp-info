<template>
  <div id="video">
    <div class="back-block" @click="onBack">
      <span>
        <a-icon type="left" />
      </span>
      <span>返回</span>
    </div>
    <div class="i-title">{{ vTitle }}</div>
    <div class="v">
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="optionGen(vSrc)"
      >
      </video-player>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  components: {},
  data() {
    return {
      vTitle: "",
      vSrc: "",
      videoList: [
        {
          vid: "shuoke",
          vSrc: "DSP_picture/video/数字信号处理说课-苏菲.mp4",
          vTitle: "数字信号处理说课-苏菲",
        },
        {
          vid: "shouke",
          vSrc: "DSP_picture/video/授课录像_门爱东_2021.mp4",
          vTitle: "授课录像_门爱东_2021",
        },
        {
          vid: "chapter3-5",
          vSrc: "DSP_picture/video/第三章-DIT-FFT.mp4",
          vTitle: "第三章-DIT-FFT",
        },
        {
          vid: "chapter4-1",
          vSrc: "DSP_picture/video/第四章-滤波器设计性能指标.mp4",
          vTitle: "第四章-滤波器设计性能指标",
        },
        {
          vid: "chapter4-2",
          vSrc: "DSP_picture/video/第四章-幅度平方函数.mp4",
          vTitle: "第四章-幅度平方函数",
        },
        {
          vid: "chapter4-3",
          vSrc: "DSP_picture/video/第四章-巴特沃斯滤波器设计.mp4",
          vTitle: "第四章-巴特沃斯滤波器设计",
        },
        {
          vid: "chapter4-4",
          vSrc: "DSP_picture/video/第四章-模拟频率变换.mp4",
          vTitle: "第四章-模拟频率变换",
        },
        {
          vid: "chapter4-5",
          vSrc: "DSP_picture/video/第四章-数字仿真.mp4",
          vTitle: "第四章-数字仿真",
        },
        {
          vid: "chapter4-6",
          vSrc: "DSP_picture/video/第四章-双线性变换.mp4",
          vTitle: "第四章-双线性变换",
        },
        {
          vid: "chapter4-7",
          vSrc: "DSP_picture/video/第四章-IIR滤波器结构.mp4",
          vTitle: "第四章-IIR滤波器结构",
        },
        {
          vid: "chapter5-1",
          vSrc: "DSP_picture/video/第五章-FIR滤波器设计-线性相位特性.mp4",
          vTitle: "第五章-FIR滤波器设计-线性相位特性",
        },
        {
          vid: "chapter5-1",
          vSrc: "DSP_picture/video/第五章-FIR滤波器设计-线性相位特性.mp4",
          vTitle: "第五章-FIR滤波器设计-线性相位特性",
        },
        {
          vid: "chapter5-2",
          vSrc: "DSP_picture/video/第五章-FIR四类线性相位滤波器、零极点.mp4",
          vTitle: "第五章-FIR四类线性相位滤波器、零极点",
        },
        {
          vid: "chapter5-3",
          vSrc: "DSP_picture/video/第五章-窗函数法-1.mp4",
          vTitle: "第五章-窗函数法-1",
        },
        {
          vid: "chapter5-4",
          vSrc: "DSP_picture/video/第五章-窗函数法-2.mp4",
          vTitle: "第五章-窗函数法-2",
        },
        {
          vid: "chapter5-5",
          vSrc: "DSP_picture/video/第五章-FIR滤波器结构.mp4",
          vTitle: "第五章-FIR滤波器结构",
        },
        {
          vid: "sampling",
          vSrc: "DSP_picture/video/Sampling.mp4",
          vTitle: "Sampling",
        },
        {
          vid: "QaE",
          vSrc: "DSP_picture/video/Quantization_and_Encoding.mp4",
          vTitle: "Quantization_and_Encoding",
        },
      ],
    };
  },
  mounted: function() {
    let vid = this.$route.params.vid;
    console.log(vid);
    let index = this.videoList.findIndex((item) => item.vid === vid);
    this.vTitle = this.videoList[index].vTitle;
    this.vSrc = this.videoList[index].vSrc;
  },
  methods: {
    onBack: function() {
      this.$router.go(-1);
    },
    optionGen: function(src) {
      return {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            //类型
            type: "video/mp4",
            //url地址
            src: src,
          },
        ],
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      };
    },
  },
};
</script>

<style lang="less" scoped>
#video {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.v {
  display: inline-block;
  width: 600px;
  height: 338px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.v:hover {
  display: block;
}
.i-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}
.back-block {
  width: 100%;
  display: flex;
  cursor: pointer;
  span:first-child {
    margin-right: 5px;
  }
}
</style>
