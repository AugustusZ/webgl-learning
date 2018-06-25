import { GeometryBase } from './base/GeometryBase';
import { MouseData } from '../io/Mouse';
import { DrawingPreset } from './DrawingPreset';

export class Point extends GeometryBase {
  x: number;
  y: number;
  r: number;
  c: string;

  static mouseClick(m: MouseData) {
    console.log('click from point class');
  }
  static mouseUp(m: MouseData) {
    /* */
  }

  constructor(x: number, y: number, r: number, c: string = '#000000') {
    super();
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }

  render(ctx: CanvasRenderingContext2D): void {
    DrawingPreset.circle(ctx, this.x, this.y, this.r, this.c);
  }
}
