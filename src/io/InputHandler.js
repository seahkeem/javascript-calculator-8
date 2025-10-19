import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGES from '../constants/messages.js';

class InputHandler {
  async getInput() {
    const input = await MissionUtils.Console.readLineAsync(MESSAGES.INPUT_PROMPT); 
    if (input.trim() === "") {
      return "0";
    }
    return input;
  }
}

export default InputHandler;
