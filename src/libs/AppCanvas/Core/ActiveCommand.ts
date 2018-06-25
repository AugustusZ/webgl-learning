import { ActiveCommandBase } from './base/ActiveCommandBase';
import { AppCanvas } from '../AppCanvas';
import { MouseData, CLICK_TYPE } from '../io/Mouse';

import { Circle } from '../Geometry/Circle';
import { Point } from '../Geometry/Point';
import { KeyboardData } from '../io/Keyboard';

export enum ACTIVE_COMMAND_TYPE {
  NONE = 'NONE',
  CIRCLE = 'CIRCLE',
  POINT = 'POINT'
}

export class ActiveCommandCommon extends ActiveCommandBase {
  constructor() {
    super();
  }

  MouseEventControl(m: MouseData) {
    if (m.clickType === CLICK_TYPE.LEFT) {
      this.mouseClick(m);
    } else if (m.clickType === CLICK_TYPE.RIGHT) {
      this.mouseClick(m);
    } else if (m.clickType === CLICK_TYPE.MOVE) {
      this.mouseMove(m);
    }
  }

  keyboardEventControl(k: KeyboardData) {
    //
  }
}

export class ActiveCommandNone extends ActiveCommandCommon {
  constructor(activeCommandManager: ActiveCommandManager) {
    super();
    this.activeCommandManager = activeCommandManager;
    this.type = ACTIVE_COMMAND_TYPE.NONE;
  }
}

export class ActiveCommandCircle extends ActiveCommandCommon {
  constructor(activeCommandManager: ActiveCommandManager) {
    super();
    this.activeCommandManager = activeCommandManager;
    this.type = ACTIVE_COMMAND_TYPE.CIRCLE;
  }

  /**
   * Click to create & render a new circle with center point
   *
   * @param {MouseData} m
   * @memberof ActiveCommandCircle
   */
  mouseClick(m: MouseData) {
    const c = new Circle(m.x, m.y, 10);
    c.dummy();
  }
}

export class ActiveCommandPoint extends ActiveCommandCommon {
  constructor(activeCommandManager: ActiveCommandManager) {
    super();
    this.activeCommandManager = activeCommandManager;
    this.type = ACTIVE_COMMAND_TYPE.POINT;
  }

  mouseClick(m: MouseData) {
    const p = new Point(m.x, m.y, 1);
    p.dummy();
  }

  mouseUp(m: MouseData) {
    Point.mouseUp(m);
  }
  mouseMove(m: MouseData) {
    console.log('point mouse move');
  }
}

export class ActiveCommandManager {
  static MAPPING_FROM_KEYCODE_TO_ACTIVE_COMMAND = {
    48: ACTIVE_COMMAND_TYPE.NONE, // 0
    49: ACTIVE_COMMAND_TYPE.POINT, // 1
    50: ACTIVE_COMMAND_TYPE.CIRCLE // 2
  };

  appCanvas: AppCanvas;
  ac: ActiveCommandCommon;
  acs: {};

  constructor(appCanvas: AppCanvas) {
    this.appCanvas = appCanvas;

    this.acs = {};
    this.acs[ACTIVE_COMMAND_TYPE.CIRCLE] = new ActiveCommandCircle(this);
    this.acs[ACTIVE_COMMAND_TYPE.POINT] = new ActiveCommandPoint(this);
    this.acs[ACTIVE_COMMAND_TYPE.NONE] = new ActiveCommandNone(this);

    // set default
    this.SetAC(ACTIVE_COMMAND_TYPE.POINT);
  }
  SetMouseEventControl(mData: MouseData) {
    this.ac.MouseEventControl(mData);
  }
  SetKeyboardEventControl(keyboard: KeyboardData) {
    this.SetAC(ActiveCommandManager.MAPPING_FROM_KEYCODE_TO_ACTIVE_COMMAND[keyboard.keyCode]);
  }

  SetAC(activeCommmandType: ACTIVE_COMMAND_TYPE) {
    this.ac = this.acs[activeCommmandType === undefined ? ACTIVE_COMMAND_TYPE.NONE : activeCommmandType];
    console.debug(`current active commmand: %c ${this.ac.type} `, 'background: #e03333dd; color: white');
  }

  MouseEvent(md: MouseData) {
    /* */
    console.log(md);
  }
}
