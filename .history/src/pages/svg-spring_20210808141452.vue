<template>
  <div class="lignth-box">
  123123
    <svg
      id="svg"
      width="100%"
      height="100%"
      viewBox="-400 -300 800 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      
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
  name: "svg-spring",
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
