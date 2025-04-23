export function drawArrowHead(x1, y1, x2, y2) {
    const arrowLength = 10;
    const angle = Math.atan2(y2 - y1, x2 - x1);
  
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  
    [line1, line2].forEach(line => {
      line.setAttribute('stroke', 'red');
      line.setAttribute('stroke-width', 2);
    });
  
    line1.setAttribute('x1', x2);
    line1.setAttribute('y1', y2);
    line1.setAttribute('x2', x2 - arrowLength * Math.cos(angle - Math.PI / 6));
    line1.setAttribute('y2', y2 - arrowLength * Math.sin(angle - Math.PI / 6));
  
    line2.setAttribute('x1', x2);
    line2.setAttribute('y1', y2);
    line2.setAttribute('x2', x2 - arrowLength * Math.cos(angle + Math.PI / 6));
    line2.setAttribute('y2', y2 - arrowLength * Math.sin(angle + Math.PI / 6));
  
    return [line1, line2];
  }
  