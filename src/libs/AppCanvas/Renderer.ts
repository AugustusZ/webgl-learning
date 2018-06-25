import { AppCanvas } from '../AppCanvas/AppCanvas';
import { GeometryBase } from './Geometry/base/GeometryBase';

export class Renderer {
  appCanvas: AppCanvas;
  list: GeometryBase[];

  constructor(appCanvas: AppCanvas) {
    this.appCanvas = appCanvas;
    this.list = [];
  }

  render(ctx: CanvasRenderingContext2D) {
    // https://stackoverflow.com/questions/3520688/javascript-loop-performance-why-is-to-decrement-the-iterator-toward-0-faster-t
    let i = this.list.length;
    while (i--) {
      this.list[i].render(ctx);
    }
  }

  add(g: GeometryBase) {
    this.list.unshift(g);
  }
}
