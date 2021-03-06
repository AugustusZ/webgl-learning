import { GeometryBase } from './base/GeometryBase';
import { DrawingPreset } from './DrawingPreset';

export class Circle extends GeometryBase {
  x: number;
  y: number;
  r: number;
  c: string;

  constructor(x: number, y: number, r: number) {
    super();
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = DrawingPreset.getRamdomHexColor();
  }

  render(ctx: CanvasRenderingContext2D): void {
    DrawingPreset.circle(ctx, this.x, this.y, this.r, this.c);
  }
}
