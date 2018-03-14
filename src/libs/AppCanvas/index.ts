import { Renderer } from './Renderer';
import { Circle } from './Geometry/Circle';
export class AppCanvas {
  static app: AppCanvas;

  hostDiv: HTMLDivElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  renderer: Renderer;

  constructor() {
    AppCanvas.app = this;
    console.log('app!!!');
    this.init();
  }
  init() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.hostDiv = document.getElementById(
      'canvas-container'
    ) as HTMLDivElement;
    this.initUtility();
    this.resize(this.hostDiv.clientWidth, this.hostDiv.clientHeight);
    this.start();
  }
  initUtility() {
    this.renderer = new Renderer(this);
  }
  resize(width: number, height: number) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
  }
  test() {
    // console.log('test!!!');
  }

  start() {
    for (let i = 0; i < 10; ++i) {
      const c = new Circle(10 * i, 10 * i, 3 * i);
      c.dummy();
    }
    this.draw(this.ctx);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.renderer.render(ctx);
    requestAnimationFrame(() => {
      this.draw(ctx);
    });
  }
}
