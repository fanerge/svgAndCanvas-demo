<template>
  <div class="lignth-box">
    <svg
      width="100%"
      height="100%"
      viewbox="-400 -300 800 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <polygon
        points="0 -10, 2 -2, 10 0, 2 2, 0 10, -2 2, -10 0, -2 -2"
      ></polygon>
    </svg>
  </div>
</template>
<script>
export default {
  name: "svg-light",
  setup(props) {},
};
</script>
<style scoped>
.lignth-box {
  height: 100%;
  font-size: 0;
  line-height: 0;
}
</style>
