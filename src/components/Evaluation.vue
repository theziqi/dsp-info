<template>
  <div id="evaluation">
    <div class="i-block">
      <div class="i-title">教师评学生</div>
      <div class="i-content">
        课堂教学评价能够促进课堂教学改革，我们建立了多元化的评价体系。教师通过学习过程评价和学习效果评价来考察学生对于课堂基础知识和衍生知识的掌握情况。
      </div>
      <div class="i-img">
        <img width="800" src="../assets/jspxx.png" alt="教师评学生">
      </div>
    </div>
    <div class="i-block">
      <div class="i-title">督导评价</div>
      <div class="i-content">
        院校两级的督导听课评价高。督导评价授课教师能够把AI相关内容引入课堂，激发学生的学习兴趣；讲课生动，深受学生欢迎。
      </div>
    </div>
    <div class="i-block">
      <div class="i-title">学生评教师</div>
      <div class="i-content">
        从学生的评教数据来看，课程的改革成效突出，学生对教学的主客观评价满意度都比较高。主观评价认为本课程具有“高效、生动、前沿、实用、创新”等特色，课程教学在“比较实用、内容丰富、理论联系实际、师生交互平台体验更好”等方面表现突出。客观评价中课程组教师连续多次学生评教结果名列前茅。
      </div>
      <div class="i-img">
        <img width="800" src="../assets/xxpjs.png" alt="学生评教师">
      </div>
    </div>
    <div class="i-block">
      <div class="i-title">课程影响</div>
      <div class="i-content">
        从远期教学的影响看，有不少学生从课程内容中找到了研究兴趣，投身创新创业项目和科研项目，运用学到的有关知识参与相关竞赛并获奖。
      </div>
      <div class="i-img">
        <img width="800" src="../assets/kcyx.png" alt="课程影响">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Evaluation',
  data(){
      return {
          
      }
  }
}
</script>


<style lang="less" scoped>
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
