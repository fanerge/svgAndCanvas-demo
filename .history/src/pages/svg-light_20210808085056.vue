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
      <g id="light-tower">
        <defs>
          <linearGradient id="tower" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#999"></stop>
<stop offset="1" stop-color="#333"></stop>
          </linearGradient>
          
        </defs>
        <polygon points="0 0, 5 50, -5 50" fill="url(#tower)"/>
      </g>
    </svg>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { random } from "@/utils";
const SVG_NS = "http://www.w3.org/2000/svg";
var XLINK_NS = "http://www.w3.org/1999/xlink";
const svg = document.getElementById("svg");

function createStar(origin) {
  var _use = document.createElementNS(SVG_NS, "use");
  _use.setAttributeNS(XLINK_NS, "xlink:href", `#${origin.id}`);
  return _use;
}
function renderStar() {
  var starRef = document.getElementById("star");
  var starGroup = document.getElementById("star-group");
  const starCount = 500;
  // 批量创建星星
  Array.from({ length: 500 }).forEach(() => {
    let star = createStar(starRef);
    star.setAttribute("fill", `rgba(255, 255, 255, ${Math.random()})`);
    // star.setAttribute("opacity", Math.random());
    star.setAttribute(
      "transform",
      `translate(${random(-400, 400)}, ${random(-300, 50)}) 
        scale(${Math.random()})`
    );
    star;
    starGroup.appendChild(star);
  });
}

export default {
  name: "svg-light",
  setup(props) {
    onMounted(() => {
      renderStar();
    });
  },
};
</script>
<style scoped>
.lignth-box {
  height: 100%;
  font-size: 0;
  line-height: 0;
  background: #000;
}
</style>
