import { drawArrowHead } from './utils';

export default class EditableArrow {

  constructor(shape) {
    this.shape = shape;
    this.element = this.render();
  }

  render() {
    const { x1, y1, x2, y2 } = this.shape.geometry;

    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', 'a9s-shape');

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', 'red');
    line.setAttribute('stroke-width', 2);
    group.appendChild(line);

    const [arrow1, arrow2] = drawArrowHead(x1, y1, x2, y2);
    group.appendChild(arrow1);
    group.appendChild(arrow2);

    return group;
  }

  get element() {
    return this.element;
  }

  destroy() {
    this.element.remove();
  }
}
