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
  margin-left: 200px;
}
p {
  font-size: 20px;
}
</style>
