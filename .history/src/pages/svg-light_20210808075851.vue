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
import { onMounted } from "vue";
import {random} from '@/utils'
const SVG_NS = "http://www.w3.org/2000/svg";
var XLINK_NS = "http://www.w3.org/1999/xlink";
const svg = document.getElementById("svg");

function createStar(origin) {
  var _use = docuemnt.createElementNS(SVG_NS, 'use');
  _use.setAttributeNS(XLINK_NS, 'xlink:href', `#${origin.id}`);
  return _use;
}
function renderStar() {
  var starRef = document.getElementById("star");
  var starGroup = document.getElementById("star-group");
  const starCount = 500;
  // 批量创建星星
  Array.from({length: 500}).forEach(() => {
    let star = createStar(starRef);
    star.setAttribute('transform', `translate(${})`)
  });
}

export default {
  name: "svg-light",
  setup(props) {
    onMounted(() => {

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
