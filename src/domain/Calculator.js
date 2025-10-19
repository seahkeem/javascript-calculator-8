import MESSAGES from '../constants/messages.js';

class Calculator {
  validateAndParseNumbers(tokens) {
    const numbers = tokens.map((token) => {

      if (token.trim() === '') {
        return 0;
      }
      
      const number = Number(token);

      if (Number.isNaN(number)) {
        throw new Error(`${MESSAGES.ERROR_INVALID_NUMBER}'${token}'`);
      }
      
      if (number < 0) {
        throw new Error(`${MESSAGES.ERROR_NEGATIVE_NUMBER}'${token}'`);
      }
      
      return number;
    });
    return numbers;
  }
}

export default Calculator;
