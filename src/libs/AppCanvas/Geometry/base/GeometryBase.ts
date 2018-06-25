import { AppCanvas } from '../../AppCanvas';

export abstract class GeometryBase {
  constructor() {
    AppCanvas.app.renderer.add(this);
  }
  abstract render(ctx: CanvasRenderingContext2D): void;
  dummy() {
    /* */
  }
}
