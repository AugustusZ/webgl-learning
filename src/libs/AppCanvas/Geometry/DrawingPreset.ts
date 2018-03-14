export class DrawingPreset {
  static circle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    c: string
  ) {
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = c;
    ctx.fill();
  }

  constructor() {
    /**/
  }
}
