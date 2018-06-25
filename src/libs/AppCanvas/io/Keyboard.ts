import { AppCanvas } from '../AppCanvas';

export enum CLICK_TYPE {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  MOVE = 'MOVE'
}

export class KeyboardData {
  keyCode: number;
  appCanvas: AppCanvas;
  keyboardEventPre: KeyboardData;

  constructor(appCanvas: AppCanvas) {
    this.appCanvas = appCanvas;
  }
}

export class KeyboardEventManager {
  appCanvas: AppCanvas;
  keyboardEventPre: KeyboardData;

  constructor(appCanvas: AppCanvas) {
    this.appCanvas = appCanvas;
    this.addEventListeners();
  }

  keyboardEventBuilder(event: KeyboardEvent) {
    const keyboardData = new KeyboardData(this.appCanvas);
    console.log(event);
    keyboardData.keyCode = event.keyCode;

    this.keyboardEventPre = keyboardData;
    this.appCanvas.activeCommandManager.SetKeyboardEventControl(keyboardData);
  }

  // click = (event: KeyboardEvent) => {
  //   this.keyboardEventBuilder(event);
  // };

  // move = (event: KeyboardEvent) => {
  //   this.keyboardEventBuilder(event);
  // };

  keyDown = (event: KeyboardEvent) => {
    this.keyboardEventBuilder(event);
  };

  addEventListeners = () => {
    document.addEventListener('keydown', this.keyDown);
    // this.appCanvas.canvas.addEventListener('mousemove', this.move);
  };
}
