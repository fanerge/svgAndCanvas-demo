export default class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  square() {
    const { x, y } = this;
    return x * x + y * y;
  }
  length() {
    return Math.sqrt(this.square());
  }
  add(q) {
    const { x, y } = this;
    return new Vector(x + q.x, y + q.y);
  }
  minus() {
    const { x, y } = this;
    return new Vector(x - q.x, y - q.y);
  }
}
