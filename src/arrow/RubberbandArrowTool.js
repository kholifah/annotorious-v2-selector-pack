import RubberbandArrow from './RubberbandArrow';

export default class RubberbandArrowTool {

  constructor(g, config, env) {
    this.g = g;
    this.env = env;
    this.config = config;
  }

  onPress(x, y) {
    this.rubberband = new RubberbandArrow({ x, y }, this.g);
  }

  onDrag(x, y) {
    this.rubberband.dragTo(x, y);
  }

  onRelease(x, y) {
    const geometry = this.rubberband.toGeometry(x, y);
    this.rubberband.destroy();

    return {
      type: 'arrow',
      geometry
    };
  }

  destroy() {
    if (this.rubberband)
      this.rubberband.destroy();
  }
}
