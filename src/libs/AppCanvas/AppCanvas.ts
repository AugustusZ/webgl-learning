import { Renderer } from './Renderer';
import { Circle } from './Geometry/Circle';
import { MouseEventManager } from './io/Mouse';
import { KeyboardEventManager } from './io/Keyboard';
import { ActiveCommandManager, ACTIVE_COMMAND_TYPE } from './Core/ActiveCommand';

export class AppCanvas {
  static app: AppCanvas;

  hostDiv: HTMLDivElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  activeCommandManager: ActiveCommandManager;
  renderer: Renderer;
  mouseEventManager: MouseEventManager;
  keyboardEventManager: KeyboardEventManager;

  t: number = 0.0;

  constructor() {
    AppCanvas.app = this;
    console.log('app!!!');
    this.init();
  }

  init() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.hostDiv = document.getElementById('canvas-container') as HTMLDivElement;
    this.initUtility();
    this.resize(this.hostDiv.clientWidth, this.hostDiv.clientHeight);
  }

  initUtility() {
    this.activeCommandManager = new ActiveCommandManager(this);
    this.renderer = new Renderer(this);
    this.mouseEventManager = new MouseEventManager(this);
    this.keyboardEventManager = new KeyboardEventManager(this);
  }

  /**
   * Resize canvas using given params
   *
   * @param {number} width
   * @param {number} height
   * @memberof AppCanvas
   */
  resize(width: number, height: number) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
  }

  public start() {
    for (let i = 0; i < 10; ++i) {
      const c = new Circle(10 * i, 10 * i, 3 * i);
      c.dummy();
    }
    this.draw(this.ctx);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.renderer.render(ctx);

    // this.doWhatever();
    this.t += 0.1;
    // console.log(this.t);
    requestAnimationFrame(() => {
      this.draw(ctx);
    });
  }

  doWhatever() {
    if (this.t > 5) {
      this.activeCommandManager.SetAC(ACTIVE_COMMAND_TYPE.POINT);
    }
    console.log(this.t);
    console.log(this.activeCommandManager.ac.GetType());
  }
}
