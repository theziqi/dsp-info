<template>
  <div id="practice">
    <a-layout style="background: none;">
      <a-layout-sider style="background: none;" width="280">
        <div class="sider" style="height: 600px;width: 250px;background: #fff;opacity: 0.7;">
          <h2>课程实例与实践</h2>
          <ul class="tabs">
            <li :class="part == 'qy' ? 'active' : ''"  @click="changeContent('qy')">
              <router-link to="/practice/qy" style="color:black">信号的取样</router-link></li>
            <li :class="part == 'fir' ? 'active' : ''" @click="changeContent('fir')"><router-link to="/practice/fir" style="color:black">FIR滤波器</router-link></li>
            <li :class="part == 'iir' ? 'active' : ''" @click="changeContent('iir')"><router-link to="/practice/iir" style="color:black">IIR滤波器</router-link></li>
            <li :class="part == 'tjs1' ? 'active' : ''" @click="changeContent('tjs1')"><router-link to="/practice/tjs1" style="color:black">探究式实验一</router-link></li>
            <li :class="part == 'tjs2' ? 'active' : ''" @click="changeContent('tjs2')"><router-link to="/practice/tjs2" style="color:black">探究式实验二</router-link></li>
            <li :class="part == 'tjs3' ? 'active' : ''" @click="changeContent('tjs3')"><router-link to="/practice/tjs3" style="color:black">探究式实验三</router-link></li>
          </ul>
        </div>
      </a-layout-sider>
      <a-layout-content>
    <div style="background:rgba(255, 255, 255, 0.9);padding: 20px 20px;border: 1px #c9cce2e8 solid;">
        <div v-if="part == 'qy'" class="i-block">
          <div class="i-title">信号的取样</div>
          <div class="i-s-title">实验一</div>
          <div class="i-s-content">
            <p>视频：</p>
            <video-player
              class="video-player vjs-custom-skin"
              :playsinline="true"
              :options="optionGen('DSP_picture/audio/qy/e1/我和我的祖国视频.mp4')"
            />
            <p>波形图：</p>
            <div class="i-img">
              <img width="600" src="DSP_picture/audio/qy/e1/我和我的祖国.gif" alt="" />
            </div>
            <p>音频：</p>
            <ul style="line-height: 45px;">
            <li>44.1kHz音频：<m-audio text="点这里播放" src="DSP_picture/audio/qy/e1/我和我的祖国44100.wav" /></li>
            <li>22.05kHz音频：<m-audio text="点这里播放" src="DSP_picture/audio/qy/e1/我和我的祖国22050.wav" /></li>
            <!-- <li>11.025kHz音频：<m-audio text="点这里播放" src="DSP_picture/audio/qy/e1/我和我的祖国11025.wav" /></li> -->
            <li>5.5125kHz音频：<m-audio text="点这里播放" src="DSP_picture/audio/qy/e1/我和我的祖国5512.wav" /></li>
            </ul>
          </div>

          <div class="i-s-title">实验二</div>
          <div class="i-s-content">
            <p>视频：</p>
            <video-player
              class="video-player vjs-custom-skin"
              :playsinline="true"
              :options="optionGen('DSP_picture/audio/qy/e2/铡美案视频.mp4')"
            >
            </video-player>
            <p>波形图：</p>
            <div class="i-img">
              <img width="600" src="DSP_picture/audio/qy/e2/铡美案.gif" alt="" />
            </div>
            <p>音频：</p>
            <ul style="line-height: 45px;">
            <li>44.1kHz音频：<m-audio text="点这里播放" src="DSP_picture/audio/qy/e2/铡美案44100.wav" /></li>
            <li>22.05kHz音频：<m-audio text="点这里播放" src="DSP_picture/audio/qy/e2/铡美案22050.wav" /></li>
            <li>5.5125kHz音频：<m-audio text="点这里播放" src="DSP_picture/audio/qy/e2/铡美案5512.wav" /></li>
            </ul>
          </div>

          <div class="i-s-title">实验三</div>
          <div class="i-s-content">
            <div style="display: flex;width: 100%;flex-wrap: wrap;justify-content: space-around;">
            <div class="i-s-img">
              <img width="345" src="DSP_picture/audio/qy/e3/0.jpg" alt="原图">
              <p>原图</p>
            </div>
            <div class="i-s-img">
              <img width="345" src="DSP_picture/audio/qy/e3/2.jpg" alt="原图">
              <p>2倍下采样</p>
            </div>
            <div class="i-s-img">
              <img width="345" src="DSP_picture/audio/qy/e3/4.jpg" alt="原图">
              <p>4倍下采样</p>
            </div>
            <div class="i-s-img">
              <img width="345" src="DSP_picture/audio/qy/e3/8.jpg" alt="原图">
              <p>8倍下采样</p>
            </div>
            </div>
            
          </div>
        
        <div class="i-s-title">实验四</div>
          <div class="i-s-content">
            <video-player
              class="video-player vjs-custom-skin"
              :playsinline="true"
              :options="optionGen('DSP_picture/audio/qy/e4/e4.mp4')"
            />
          </div>

          <div class="i-s-title">实验五</div>
          <div class="i-s-content">
            <video-player
              class="video-player vjs-custom-skin"
              :playsinline="true"
              :options="optionGen('DSP_picture/audio/qy/e5/联通5G频谱.mp4')"
            />
          </div>
        </div>

      <div v-if="part == 'fir'" class="i-block">
        <div class="i-title">FIR数字滤波器</div>
        <div class="i-s-content text-indent">
          <p>
            吉布斯效应让<img src="../assets/fir/image001.png" />与理想频响<img
              src="../assets/fir/image003.png"
              alt=""
            />
            之间存在明显差异，具体表现在两点：过渡带和波动的出现。因此在利用窗函数法设计FIR滤波器时，需要考虑如何在减小波动幅值的同时使过渡带变窄。
          </p>
          <p>
            <b
              >(1) 理想特性不连续点<img
                src="../assets/fir/image005.png"
              />附近形成过渡带</b
            >
          </p>
          <p>
            正、负肩峰之间的频带为近似过渡带，其宽度等于所用窗谱的主瓣宽度。对于矩形窗，过渡带宽度为4π/N。不同的窗函数对应的窗谱主瓣宽度不同，因此产生的过渡带宽度也不同。若窗函数固定，增大N（即截取更长的有限长序列）可使过渡带变窄，但N的增大会增加计算量和实现成本。注意，工程中，将阻带衰减<img
              src="../assets/fir/image008.png"
            />对应的边缘频率<img
              src="../assets/fir/image010.png"
            />和通带衰减<img
              src="../assets/fir/image012.png"
            />对应的边缘频率<img
              src="../assets/fir/image014.png"
            />的差作为过渡带宽，即<img
              src="../assets/fir/image016.png"
            />。因此，往往小于窗函数的主瓣宽度。
          </p>
          <p><b>(2) 通带内产生波动</b></p>
          <p>
            波动是由窗谱的旁瓣引起的。波动的幅度及数量分别取决于窗谱旁瓣的相对幅度及个数：旁瓣的相对幅度越大，波动幅度也就越大；旁瓣个数越多，产生的波动个数也越多。不同的窗函数有不同的窗谱特性，因而产生不同的波动特性。因此，波动与窗的宽度N无关，完全依赖窗函数的类型。具体地，如图5.11所示，对于矩形窗函数，当增加窗宽N时，过渡带宽度Δ<img
              src="../assets/fir/image018.png"
            />＝4π/N将随之减小，通带、阻带内波动起伏加剧，但最大波动保持为8.95
            %。
          </p>
          <p>
            以上分析表明，N的增加只能有效控制过渡带带宽，如果想减少通带内的波动只能改变窗函数的类型。此外，在设计FIR数字滤波器时，为了减小吉布斯效应，选择窗函数应使其频谱符合两项要求：
          </p>
          <p>（1）主瓣宽度尽可能的窄，以使过渡带尽量陡；</p>
          <p>
            （2）第一旁瓣相对主瓣尽可能的小，让能量尽可能集中于主瓣内，以减小肩峰和波动。
          </p>
          <p>
            对于窗函数，上述两个要求不可兼得。因此，通常采用的方案是通过牺牲主瓣宽度来换取对旁瓣的抑制。
          </p>
          <div class="i-img">
          <img src="../assets/fir/image020.png" alt="" />
            <p><b>矩形窗的吉布斯效应</b></p>
            <p>横坐标为归一化频率，纵坐标是加窗后的幅度响应</p>
          </div>
          
        </div>
      </div>

      <div v-if="part == 'iir'" class="i-block">
        <div class="i-title">IIR数字滤波器</div>
        <div class="i-s-title">降噪</div>
        <div class="i-s-content">
          <p>一段音乐中夹杂着噪声，严重影响收听质量。</p>
          <p>噪声污染后的信号及其频谱：</p>
          <p>
            <ul>
              <li>含有噪声的音乐信号：
                <m-audio src="DSP_picture/audio/iir/噪声音频.mp4" />
              </li>
            </ul>
          </p>
          <div class="i-img">
          <img width="600"  src="../assets/iir/iir1.png" alt="" />
          </div>
          <p>降噪效果：
            <m-audio src="DSP_picture/audio/iir/滤波后音频.mp4" />
          </p>
          <p>
            <ul>
              <li>
                滤波后信号几乎听不到噪声，但有点压抑，高频被滤除的缘故。
              </li>
              <li>
                若噪声在所有频率上，则不可能不损伤信号而滤除噪声。
              </li>
            </ul>
            </p>
            <div class="i-img">
              <img width="600" src="../assets/iir/iir2.png" alt="" />
            </div>
        </div>

        <div class="i-s-title">例1</div>
        <div class="i-s-content">
                      <p>
              已知：<img src="../assets/iir/e1_01.png" alt="" />
            </p>
            <p>
              取样频率<img src="../assets/iir/e1_02.png" alt="" />
            </p>
            <p>
              试取出信号<img src="../assets/iir/e1_03.png" alt="" />
            </p>
          <div class="i-img">
            <img width="600" src="../assets/iir/e1_1.png" alt="" />
            <img width="600" src="../assets/iir/e1_2.png" alt="" />
            <img width="600" src="../assets/iir/e1_3.png" alt="" />
            <img width="600" src="../assets/iir/e1_4.png" alt="" />
            <img width="600" src="../assets/iir/e1_5.png" alt="" />
          </div>
        </div>

        <div class="i-s-title">2D实践</div>
        <div class="i-s-content">
          <div class="i-img">
          <img width="600" src="../assets/iir/iir6.png" alt="" />
          <img width="693" src="../assets/iir/iir7.png" alt="" />
          </div>
        </div>

        <div class="i-s-title">IIR DF的应用</div>
        <div class="i-s-content">
          <p>IIR DF设计流程</p>
          <div class="i-img">
          <img width="600" src="../assets/iir/iir8.png" alt="" />
          </div>
          <p>硬件或软件实现：</p>
          <ul>
            <li>软件：Matlab、C 语言</li>
            <li>硬件：DSP 芯片、FPGA、ASIC 芯片等。</li>
          </ul>
          <div class="i-img">
          <img width="600" src="../assets/iir/iir9.png" alt="" />
          </div>
          <p>IIR 滤波器被广泛地应用在数字通信领域中：</p>
            <ul>
            <li>数字按键电话的双音多频 (DTMF) 拨号编解码</li>
            <li>数据通信中的时钟恢复</li>
            <li>ADC/DAC 抗混叠滤波</li>
            <li>差分脉冲编码调制（DPCM）</li>
            <li>时域判决反馈均衡器 (Decision Feedback Equalizer，DFE）</li>
            <li>调制滤波</li>
            <li>自适应回波抵消</li>
            <li>多径衰落补偿</li>
            <li>话音和背景噪声的分离</li>
          </ul>
          <div class="i-img">
          <img width="600" src="../assets/iir/iir10.png" alt="" />
          </div>
        </div>

        <div class="i-s-title">IIR DF的应用：通信应用_DTMF</div>
        <div class="i-s-content">
          <div class="i-img">
          <img width="600" src="../assets/iir/iir11.jpg" alt="" />
          <img width="600" src="../assets/iir/iir12.jpg" alt="" />
          <img width="600" src="../assets/iir/iir13.png" alt="" />
          <img width="600" src="../assets/iir/iir14.png" alt="" />
          </div>
        </div>
      </div>

      <div v-if="part == 'tjs1'" class="i-block">
        <div class="i-title">实验一：数字信号的 FFT 分析</div>
        <div class="i-s-title">实验内容：</div>
        <div class="i-s-content">
          <p>（1） 离散信号的频谱分析</p>
          <p>（2） DTMF 信号频谱分析</p>
        </div>

        <div class="i-s-title">知识传授与能力提升：</div>
        <div class="i-s-content">
          <p>通过本次实验，应该掌握：</p>
          <ul>
            <li>用傅立叶变换进行信号分析时基本参数的选择；</li>
            <li>
              经过离散时间傅立叶变换（DTFT）和有限长度离散傅立叶变换（DFT）后信号频谱上的区别，前者
              DTFT 时间域是离散信号，频率域还是连续的，而DFT
              在两个域中都是离散的；
            </li>
            <li>
              离散傅立叶变换的基本原理、特性，以及经典的快速算法（基2时间抽选法），体会快速算法的效率；
            </li>
            <li>
              获得一个高密度频谱和高分辨率频谱的概念和方法，建立频率分辨率和时间分辨率的概念，为将来进一步进行时频分析（例如小波）的学习和研究打下基础；
            </li>
            <li>
              建立 DFT 从整体上可看成是由窄带相邻滤波器组成的滤波器组的概念。
            </li>
          </ul>
        </div>

        <div class="i-s-title">延伸学习：</div>
        <div class="i-s-content">
          <p>
            <b>革命先烈</b
            >-李白。通过《永不消逝的电波》等作品了解李白的典型事迹，在学习李白的爱国精神之余，探究其中相关的科学技术，更好地理解如何将理论知识转化为实际应用，增强科技强国信念。
          </p>
          <p style="line-height: 7px">参考资料（点击图片）：</p>
          <div
            style="width: 100%;display: flex;justify-content:center;margin-bottom: 10px"
          >
            <router-link to="/read/yongbuxiaoshidedianbo">
              <img
                style="width: 600px;"
                src="../assets/yongbuxiaoshidedianbo.png"
                alt="李白-永不消逝的电波"
              />
            </router-link>
          </div>

          <p>
            <b>科学匠人</b
            >-傅里叶。了解傅里叶生平贡献和对数学孜孜不倦追求的执着精神。
          </p>
          <p style="line-height: 7px">参考资料（点击图片）：</p>
          <div
            style="width: 100%;display: flex;justify-content:center;margin-bottom: 10px"
          >
            <router-link to="/video/fuliye">
              <img
                style="width: 600px;"
                src="../assets/fuliye.jpg"
                alt="傅里叶"
              />
            </router-link>
          </div>

          <p><b>巩固学习</b>-通过可视化讲解，从其他角度深入理解FFT。</p>
          <p style="line-height: 7px">
            <a href="https://www.bilibili.com/video/av203048598">参考资料</a>
          </p>
        </div>
      </div>

      <div v-if="part == 'tjs2'" class="i-block">
        <div class="i-title">实验二：DTMF 信号的编码</div>
        <div class="i-s-title">实验内容：</div>
        <div class="i-s-content">
          <p>（1） 把您的联系电话号码 通过DTMF 编码生成为一个 .wav 文件。</p>
          <p>（2） 对所生成的DTMF文件进行解码。</p>
        </div>
        <div class="i-s-title">知识传授与能力提升：</div>
        <div class="i-s-content">
          <p>通过本次实验，应该掌握：</p>
          <ul>
            <li>复习和巩固 IIR 数字滤波器的基本概念；</li>
            <li>
              掌握 IIR 数字滤波器的设计方法；
            </li>
            <li>
              掌握 IIR 数字滤波器的实现结构；
            </li>
            <li>
              能够由滤波器的实现结构分析滤波器的性能；
            </li>
            <li>
              了解通信系统电话 DTMF 拨号的基本原理和 IIR 滤波器实现方法。
            </li>
          </ul>
        </div>
        <div class="i-s-title">延伸学习：</div>
        <div class="i-s-content">
          <p>
            <b>知识迁移</b
            >-调研数字信号处理在航天中的应用，了解数字信号处理对于科技强国的重要价值。
          </p>
          <p style="line-height: 7px">
            航天科普参考资料：<a
              href="http://www.spacechina.com/n25/n148/index.html"
              >航天文化_中国航天科技集团有限公司 (spacechina.com)
            </a>
          </p>
          <p>
            <b>科学匠人</b
            >-钱学森、任新民、黄纬禄、屠守锷、梁守槃等航天领域的科学家。了解我国在航天领域的科技发展历程，体悟老一辈科学家呕心沥血、潜心钻研的探索经历，学习为中华民族伟大复兴不懈奋斗的斗争精神。
          </p>
          <p style="line-height: 7px">
            参考资料：<a
              href="http://scitech.people.com.cn/n1/2019/0421/c1007-31041211.html"
              >国内首座钱学森与“航天四老”雕塑落成--科技--人民网
              (people.com.cn)</a
            >
          </p>
        </div>
      </div>

      <div v-if="part == 'tjs3'" class="i-block">
        <div class="i-title">实验三：FIR 数字滤波器的设计和实现</div>
        <div class="i-s-title">实验内容：</div>
        <div class="i-s-content">
          <p>
            录制自己的一段声音，长度为 45秒，取样频率
            32kHz，然后叠加一个高斯白噪声，使得信噪比为
            20dB。请采用窗口法设计一个 FIR 带通滤波器，滤除噪声提高质量。
          </p>
        </div>
        <div class="i-s-title">知识传授与能力提升：</div>
        <div class="i-s-content">
          <p>通过本次实验，应该掌握：</p>
          <ul>
            <li>FIR 数字滤波器窗口设计法的原理和设计步骤；</li>
            <li>
              Gibbs 效应发生的原因和影响；
            </li>
            <li>
              不同类型的窗函数对滤波效果的影响，以及窗函数和长度 N 的选择。
            </li>
          </ul>
        </div>

        <div class="i-s-title">延伸学习：</div>
        <div class="i-s-content">
          <p>
            <b>拓展练习</b>-选择不同的取样频率对2008年奥运会歌曲《我和你 You and
            Me》和《北京欢迎你》、《我爱北京天安门、《北京的金山上》等不同歌曲进行取样，通过实践分别分析不同歌曲不会失真的取样频率，深刻体会取样频率不能取得太高也不能取得太低，只有找到实际中最合适的取样频率才不会失真，才能既保证取样的精度又保证取样的效率。
          </p>
          <p>
            <b>知识迁移</b
            >-调研数字信号处理在医学领域的应用，了解数字信号处理在跨学科实际应用中的重要价值。
          </p>
          <p>
            <b>科学匠人</b
            >-屠呦呦。了解屠呦呦生平及贡献，学习科学家克服艰难险阻追求真理以及严谨务实的精神。
          </p>
          <p style="line-height: 7px">
            参考资料：
            <a href="http://www.most.gov.cn/ztzl/tyy/"
              >屠呦呦获得2015年诺贝尔生理学或医学奖 (most.gov.cn)</a
            >
          </p>
        </div>
      </div>
    </div>
      </a-layout-content>
    </a-layout>

  </div>
</template>

<script>
export default {
  name: "Practice",
  data() {
    return {
      part: "",
    };
  },
  // beforeRouteUpdate(to,from,next){
  //   this.part = this.$route.params.part;
  //   next();
  // },
  mounted(){
    this.part = this.$route.params.part;
  },
  watch: {
  '$route' () {
    this.part = this.$route.params.part;
  }
},
  methods: {
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
    changeContent(name){
      this.part=name
    }
  }
};
</script>

<style lang="less" scoped>
.active{
  border-left:5px #1d34b9 solid;
  font-weight: bold;
}
.sider{
  margin-top: 40px;
  border: 1px #c9cce2e8 solid;
  h2{
    font-size: 24px;
    font-family: 微软雅黑;
    font-weight: 400;
    color: #000000;
    line-height: 46px;
    margin: 40px 0 20px 30px;
    border-bottom: 2px #1d34b9 solid;
    width: 70%;
    font-weight: 600;
  }
  .tabs{
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    li{
      display: block;
      font-size:22px;
      border-left:5px #3452ff solid;
      padding-left:10px;
      margin: 20px 0;
    }
  }
}
.video-player{
  width: 600px;
  margin: 0 auto;
}
.text-indent {
  text-indent: 2em;
}
.i-block {
  margin-bottom: 50px;
}
.i-title {
  letter-spacing: 8px;
  font-size: 30px;
  font-family: 微软雅黑;
  color: #000000;
  line-height: 66px;
  text-align: center;
  font-weight: 600;
}
.i-s-title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}
.i-s-content{
  margin: 0 auto;
  width: 700px;
}
.i-img {
  margin: 10px 0;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    margin: 5px 0;
  }
}
.i-s-img{
  margin: 10px 0;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    margin: 5px 0;
  }
}
</style>
