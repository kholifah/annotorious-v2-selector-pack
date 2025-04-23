export default class RubberbandArrow {
    constructor(anchor, g) {
      this.anchor = anchor;
      this.group = g;
  
      this.line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      this.line.setAttribute('stroke', 'red');
      this.line.setAttribute('stroke-width', 2);
  
      this.group.appendChild(this.line);
    }
  
    dragTo(x, y) {
      this.line.setAttribute('x1', this.anchor.x);
      this.line.setAttribute('y1', this.anchor.y);
      this.line.setAttribute('x2', x);
      this.line.setAttribute('y2', y);
    }
  
    toGeometry(x, y) {
      return {
        x1: this.anchor.x,
        y1: this.anchor.y,
        x2: x,
        y2: y
      };
    }
  
    destroy() {
      this.group.removeChild(this.line);
    }
  }
  