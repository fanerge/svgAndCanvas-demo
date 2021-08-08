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
const relation = 300;

function genPoints(num = 2) {
  let list = Array.from({length: num}, (v, i) => {
    return {
      name: i,
      color: randomRGB(),
    }
  });
  list.forEach((o, i) => {
    var circle = document.createElementNS(SVG_NS, circle);
    var x = random(-400, 400);
    var y = random(-400, 400);
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 10);
    circle.setAttribute('fill', o.color);
    o.circle = circle;
    // 位置矢量
    o.s = new Vector(x, y);
    // 速度矢量
    o.v = new Vector(0, 0);
    // 加速度矢量
    o.a = new Vector(0, 0);
  });
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
