import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

class OutputHandler {
  printResult(result) {
    MissionUtils.Console.print(`${MESSAGES.OUTPUT_PROMPT}${result}`);
  }

  printError(message) {
    MissionUtils.Console.print(message);
  }
}

export default OutputHandler;
