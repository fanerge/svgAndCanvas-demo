<template>
  <canvas id="canvas-time" style="height: 100%">
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

function renderCanvas() {
  WINDOW_WIDTH = document.body.clientWidth;
  WINDOW_HEIGHT = document.body.clientHeight;
  MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);
  RADIUS = Math.round((WINDOW_WIDTH * 4) / 5 / 108) - 1;
  ARGIN_TOP = Math.round(WINDOW_HEIGHT / 5);

  var canvas = document.getElementById("canvas-time");
  var context = canvas.getContext("2d");
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  curShowTimeSeconds = getCurrentShowTimeSeconds();

  setInterval(function () {
    render(context);
    update();
  }, 50);
}

function getCurrentShowTimeSeconds() {
  var curTime = new Date();
  var ret = endTime.getTime() - curTime.getTime();
  ret = Math.round(ret / 1000);

  return ret >= 0 ? ret : 0;
}

export default {
  name: "canvas-time",
  setup(props) {},
};
</script>
