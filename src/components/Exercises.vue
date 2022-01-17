<template>
  <div id="exercises">
    <p>
      <router-link to="/read/e-exerclass">习题课.pdf</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "exercises",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#exercises {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px 20px;
  border: 1px #c9cce2e8 solid;
}
p {
  font-size: 20px;
}
</style>
