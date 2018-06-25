import { AppCanvas } from '../AppCanvas';

export enum CLICK_TYPE {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  MOVE = 'MOVE'
}

export class MouseData {
  x: number;
  y: number;
  xPre: number;
  yPre: number;
  clickType: CLICK_TYPE;
  appCanvas: AppCanvas;
  mEventPre: MouseData;

  constructor(appCanvas: AppCanvas) {
    this.appCanvas = appCanvas;
  }
}

export class MouseEventManager {
  appCanvas: AppCanvas;
  mEventPre: MouseData;

  constructor(appCanvas: AppCanvas) {
    this.appCanvas = appCanvas;
    this.addEventListeners();
  }

  MouseEventBuilder(event: MouseEvent) {
    const mData = new MouseData(this.appCanvas);
    mData.x = event.x;
    mData.y = event.y;

    if (this.mEventPre) {
      mData.xPre = this.mEventPre.x;
      mData.yPre = this.mEventPre.y;
    }

    if (event.type === 'mousemove') {
      mData.clickType = CLICK_TYPE.MOVE;
      this.mEventPre = mData;
      this.appCanvas.activeCommandManager.SetMouseEventControl(mData);
      return;
    }

    if (event.button === 0) {
      mData.clickType = CLICK_TYPE.LEFT;
    } else if (event.button === 2) {
      mData.clickType = CLICK_TYPE.RIGHT;
    }

    this.mEventPre = mData;
    this.appCanvas.activeCommandManager.SetMouseEventControl(mData);
  }

  click = (event: MouseEvent) => {
    this.MouseEventBuilder(event);
  };

  move = (event: MouseEvent) => {
    this.MouseEventBuilder(event);
  };

  addEventListeners = () => {
    this.appCanvas.canvas.addEventListener('click', this.click);
    this.appCanvas.canvas.addEventListener('mousemove', this.move);
  };
}
