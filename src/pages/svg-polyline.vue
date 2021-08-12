<template>
  <div class="lignth-box">
  <div class="form">
      <span>弹簧自平衡物理模型，选择小球个数</span>
      <select v-model="num">
       <option v-for="v in options" :key="v" :value="v">{{v}}</option>
      </select>
    </div>
    <svg  viewBox="-50 -450 1000 500" id="chart">
    </svg>
  </div>
</template>
<script>
import { onMounted, onBeforeUnmount, ref, reactive, watch } from "vue";
import { random, randomRGB } from "@/utils";
import Vector from "@/utils/vector";
const SVG_NS = "http://www.w3.org/2000/svg";
var XLINK_NS = "http://www.w3.org/1999/xlink";

function createTag(tagName, obj={}) {
  let tag = document.createElementNS(SVG_NS, tagName);
  Object.entries(obj).forEach(([k, v]) => {
    tag.setAttribute(k, v);
  });
  return tag;
}

let textObj = {
  'font-size': '12px',
  'color': 'black'
}

function createCoor() {
  const svg = document.querySelector('#chart');
  const {width, height} = svg.viewBox.baseVal;
  const g = createTag('g', {
    id: 'coor'
  });
  let p = createTag('path', {
    d: `M 0 0, h 800, M 0 0, v -400`,
    stroke: 'black'
  });

  const hs = Array.from({length: (width - 150) / 100}, (_, i) => {
    let x = (i+1)*100;
    let t = createTag('text', {
      x: x-10,
      y: 15,
      ...textObj
    });
    t.textContent = x;
    g.appendChild(t)
    return `M ${x} 0, v -5`
  }).join(',');
  const vs = Array.from({length: (height - 150) / 100}, (_, i) => {
    let y = (i+1)*100;
    let yy = -y;
    console.log(yy)
    let t = createTag('text', {
      x: -26,
      y: yy+3,
      ...textObj
    });
    t.textContent = y;
    g.appendChild(t)
    return `M 0 ${yy}, h 5`
  }).join(',');

  let kh = createTag('path', {
    d: `${hs}`,
    stroke: 'black'
  });
  let kv = createTag('path', {
    d: `${vs}`,
    stroke: 'black'
  });
  g.appendChild(p)
  g.appendChild(kh)
  g.appendChild(kv)
  svg.appendChild(g)
}

let list = [
  {
    name: 'x',
    val: 100,
  },
  {
    name: 'x',
    val: 200,
  },
  {
    name: 'x',
    val: 250,
  },
  {
    name: 'x',
    val: 200,
  },
  {
    name: 'x',
    val: 200,
  }
];
function createPolyline() {
  const svg = document.querySelector('#chart');
  const g = createTag('g', {
    id: 'polyline'
  });
  let cs = [];
  let ds = ['M 0 0'];
  list.forEach((o, i) => {
    let x = i*100;
    let y = -(o.val)
    let g = createTag('g', {
      'transform-origin': '50% 50%',
      'class': 'item'
    });
    let c = createTag('circle', {
      r: 5,
      cx: x, 
      cy: y,
      fill: 'white',
      stroke: 'blue',
      'stroke-width': 3,
    });
    let t = createTag('text', {
      x,
      y: y -10,
      ...textObj,
      color: 'red'
    });
    t.textContent = `${o.name}`
    g.appendChild(t);
    g.appendChild(c);
    g.addEventListener('mouseenter', (e) => {
      console.log(e.target.setAttribute('transform', 'scale(2)'))
    });
    g.addEventListener('mouseleave', (e) => {
      e.target.setAttribute('transform', 'scale(2)')
    });
    cs = cs.concat(g);
    ds = ds.concat(`L ${x} ${y}`);
  });
  let p = createTag('path', {
    'stroke-width': 2,
    stroke: 'pink',
    fill: 'none',
    d: ds.join(',')
  });
  g.appendChild(p);
  cs.forEach(t => {
    g.appendChild(t);
  });
  svg.appendChild(g);

}




export default {
  name: "svg-spring",
  setup(props) {
    const options = reactive(Array.from({length: 19}, (v, i) => i+2));
    const num = ref(6);

    watch(num, (count, prevCount) => { 

    }) 
    onMounted(() => {
      createPolyline();
      createCoor();
    });
    onBeforeUnmount(() => {

    })

    return {
      options,
      num
    }
  },
};
</script>
<style scoped>
.lignth-box {
  position: relative;
  height: 100%;
  font-size: 0;
  line-height: 0;
}
#chart {
  background-color: #f6f6f6;
  width: 1000px;
  height: 500px;
}
::v-deep .item {
  cursor: pointer;
}
</style>
