<template>
  <canvas id="canvas" style="height: 100%">
    当前浏览器不支持Canvas，请更换浏览器后再试
  </canvas>
</template>
<script>
import digit from "@/utils/digit";
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime = new Date(2014, 6, 11, 18, 47, 52);
var curShowTimeSeconds = 0;

var balls = [];
const colors = [
  "#33B5E5",
  "#0099CC",
  "#AA66CC",
  "#9933CC",
  "#99CC00",
  "#669900",
  "#FFBB33",
  "#FF8800",
  "#FF4444",
  "#CC0000",
];

export default {
  name: "canvas-time",
  setup(props) {},
};
</script>
