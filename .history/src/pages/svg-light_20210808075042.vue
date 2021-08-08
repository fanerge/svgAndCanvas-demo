<template>
  <div class="lignth-box">
    <svg
      id="svg"
      width="100%"
      height="100%"
      viewBox="-400 -300 800 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <polygon
          id="star"
          points="0 -10, 2 -2, 10 0, 2 2, 0 10, -2 2, -10 0, -2 -2"
        />
      </defs>
      <g id="star-group"></g>
    </svg>
  </div>
</template>
<script>
const SVG_NS = "http://www.w3.org/2000/svg";
var XLINK_NS = "http://www.w3.org/1999/xlink";
const svg = document.getElementById("svg");
function renderStar() {
  var star = document.getElementById("star");
  var starGroup = document.getElementById("star-group");
}

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
