<template>
  <div id="testpaper">
    <p>
      <a
        href="DSP_picture/download/testpaper/paper1.doc"
        download="DSP试卷及答案-样例1.doc"
        >DSP试卷及答案-样例1.doc</a
      >
    </p>
    <p>
      <router-link to="/read/p-paper1">DSP试卷及答案-样例1.pdf</router-link>
    </p>
    <p>
      <a
        href="DSP_picture/download/testpaper/paper2.doc"
        download="DSP试卷及答案-样例2.doc"
        >DSP试卷及答案-样例2.doc</a
      >
    </p>
    <p>
      <router-link to="/read/p-paper2">DSP试卷及答案-样例2.pdf</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Testpaper",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#testpaper {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px 20px;
  border: 1px #c9cce2e8 solid;
}
p {
  font-size: 20px;
}
</style>
