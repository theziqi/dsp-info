<template>
  <div id="practice">
    <div class=WordSection1 style='layout-grid:15.6pt'>

      <p class=MsoListParagraph style='margin-left:18.0pt;text-indent:-18.0pt;
line-height:150%'><span lang=EN-US><span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span><span style='font-family:黑体;color:black'>软件仿真实验</span></p>

      <p class=MsoNormal style='text-indent:21.0pt;line-height:150%'><span style='font-family:黑体;color:black'>实验一：数字信号的</span><span lang=EN-US style='font-family:宋体;color:black'> FFT </span><span style='font-family:黑体;
color:black'>分析</span><span lang=EN-US style='font-family:宋体;color:black'>&nbsp;&nbsp;
        </span><span lang=EN-US style='font-size:11.0pt;line-height:150%;font-family:
宋体;color:black'>&nbsp;&nbsp;</span><span lang=EN-US style='font-size:12.0pt;
line-height:150%;font-family:宋体;color:black'>&nbsp;&nbsp;&nbsp;</span></p>

      <p class=MsoListParagraph style='margin-left:50.45pt;text-indent:6.55pt'><span style='font-family:宋体;color:black'>实验内容及要求：</span></p>

      <p class=MsoListParagraph style='margin-left:70.9pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:宋体;color:black'>（1）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
          </span></span><span style='font-family:宋体;color:black'>离散信号的频谱分析</span></p>

      <p class=MsoListParagraph style='margin-left:70.9pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:宋体;color:black'>（2）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
          </span></span><span lang=EN-US style='font-family:宋体;color:black'>DTMF </span><span style='font-family:宋体;color:black'>信号频谱分析</span></p>

      <p class=MsoNormal style='margin-left:1.0cm'><span lang=EN-US style='font-family:
宋体;color:black'>&nbsp;&nbsp;&nbsp;&nbsp; </span><span style='font-family:宋体;
color:black'>通过本次实验，应该掌握：</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>用傅立叶变换进行信号分析时基本参数的选择；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>经过离散时间傅立叶变换（<span lang=EN-US>DTFT</span>）和有限长度离散傅立叶变换（<span lang=EN-US>DFT</span>） 后信号频谱上的区别，前者<span lang=EN-US> DTFT </span>时间域是离散信号，频率域还是连续的，而<span lang=EN-US> DFT </span>在两个域中都是离散的；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>离散傅立叶变换的基本原理、特性，以及经典的快速算法（基<span lang=EN-US>2</span>时间抽选法），体会快速算法的效率；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>获得一个高密度频谱和高分辨率频谱的概念和方法，建立频率分辨率和时间分辨率的概念，为将来进一步进行时频分析（例如小波）的学习和研究打下基础；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>建立<span lang=EN-US> DFT </span>从整体上可看成是由窄带相邻滤波器组成的滤波器组的概念。</span></p>

      <p class=MsoNormal style='text-indent:21.0pt;line-height:150%'><span style='font-family:黑体;color:black'>实验二：</span><span lang=EN-US style='font-family:宋体;color:black'>DTMF </span><span style='font-family:黑体;
color:black'>信号的编码</span><span lang=EN-US style='font-family:宋体;color:black'>&nbsp;
        </span></p>

      <p class=MsoNormal style='text-indent:2.0cm'><span style='font-family:宋体;
color:black'>实验内容及要求</span></p>

      <p class=MsoListParagraph style='margin-left:70.9pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:宋体;color:black'>（1）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
          </span></span><span style='font-family:宋体;color:black'>把您的联系电话号码 通过<span lang=EN-US>DTMF </span>编码生成为一个<span lang=EN-US> .wav </span>文件。</span></p>

      <p class=MsoListParagraph style='margin-left:70.9pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:宋体;color:black'>（2）<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
          </span></span><span style='font-family:宋体;color:black'>对所生成的<span lang=EN-US>DTMF</span>文件进行解码。</span></p>

      <p class=MsoNormal style='margin-left:49.9pt'><span style='font-family:宋体;
color:black'>通过本实验，应该掌握：</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>复习和巩固<span lang=EN-US>
            IIR </span>数字滤波器的基本概念；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>掌握<span lang=EN-US> IIR </span>数字滤波器的设计方法；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>掌握<span lang=EN-US> IIR </span>数字滤波器的实现结构；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>能够由滤波器的实现结构分析滤波器的性能；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>了解通信系统电话<span lang=EN-US> DTMF </span>拨号的基本原理和<span lang=EN-US> IIR </span>滤波器实现方法。</span></p>

      <p class=MsoNormal style='text-indent:21.0pt;line-height:150%'><span style='font-family:黑体;color:black'>实验三：</span><span lang=EN-US style='font-family:宋体;color:black'>FIR </span><span style='font-family:黑体;
color:black'>数字滤波器的设计和实现</span><span lang=EN-US style='font-family:宋体;
color:black'>&nbsp;&nbsp; </span></p>

      <p class=MsoNormal style='margin-left:2.0cm'><span style='font-family:宋体;
color:black'>实验内容及要求：</span></p>

      <p class=MsoNormal style='margin-left:2.0cm'><span style='font-family:宋体;
color:black'>录制自己的一段声音，长度为<span lang=EN-US> 45</span>秒，取样频率<span lang=EN-US>
            32kHz</span>，然后叠加一个高斯白噪声，使得信噪比为<span lang=EN-US> 20dB</span>。请采用窗口法设计一个<span lang=EN-US> FIR </span>带通滤波器，滤除噪声提高质量。</span></p>

      <p class=MsoNormal style='margin-left:2.0cm'><span style='font-family:宋体;
color:black'>通过本次实验，掌握以下知识：</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span lang=EN-US style='font-family:宋体;color:black'>FIR </span><span style='font-family:宋体;color:black'>数字滤波器窗口设计法的原理和设计步骤；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span lang=EN-US style='font-family:宋体;color:black'>Gibbs </span><span style='font-family:宋体;color:black'>效应发生的原因和影响；</span></p>

      <p class=MsoListParagraph style='margin-left:78.0pt;text-indent:-21.0pt'><span lang=EN-US style='font-family:Wingdings;color:black'>l<span style='font:7.0pt "Times New Roman"'>&nbsp;
          </span></span><span style='font-family:宋体;color:black'>不同类型的窗函数对滤波效果的影响，以及窗函数和长度
          <span lang=EN-US>N </span>的选择。</span></p>

      <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Practice',
  data(){
      return {
          
      }
  }
}
</script>


<style lang="less" scoped>
</style>
