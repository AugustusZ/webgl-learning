import { ACTIVE_COMMAND_TYPE, ActiveCommandManager } from '../ActiveCommand';
import { MouseData } from '../../io/Mouse';

export class ActiveCommandBase {
  type: ACTIVE_COMMAND_TYPE;
  activeCommandManager: ActiveCommandManager;

  constructor() {
    /* */
  }

  GetType() {
    console.log(this.type);
  }

  mouseDown(m: MouseData) {
    /* */
  }

  mouseUp(m: MouseData) {
    /* */
  }

  mouseMove(m: MouseData) {
    /* */
  }

  mouseClick(m: MouseData) {
    /* */
  }
}
