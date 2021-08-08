<template>
  <div class="lignth-box">
  123123
    <svg
      id="svg"
      width="100%"
      height="100%"
      viewBox="-400 -400 800 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      
    </svg>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { random, randomRGB } from "@/utils";
import Vector from "@/utils/vector";
const SVG_NS = "http://www.w3.org/2000/svg";
var XLINK_NS = "http://www.w3.org/1999/xlink";
const svg = document.getElementById("svg");

function genPoints(num = 2) {
  let list = 
}

export default {
  name: "svg-spring",
  setup(props) {
    onMounted(() => {
      // renderStar();
    });
  },
};
</script>
<style scoped>
.lignth-box {
  height: 100%;
  font-size: 0;
  line-height: 0;
}
</style>
