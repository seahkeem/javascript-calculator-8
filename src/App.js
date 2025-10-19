import InputHandler from './io/InputHandler.js';
import OutputHandler from './io/OutputHandler.js';
import StringParser from './domain/StringParser.js';
import StringTokenizer from './domain/StringTokenizer.js';
import Calculator from './domain/Calculator.js';

class App {
  #inputHandler = new InputHandler();
  #outputHandler = new OutputHandler();
  #stringParser = new StringParser();
  #stringTokenizer = new StringTokenizer();
  #calculator = new Calculator();

  async run() {
    try {
      const inputString = await this.#inputHandler.getInput();

      if (inputString === '0') {
        this.#outputHandler.printResult(0);
        return;
      }

      const { delimiters, numbersString } = this.#stringParser.parse(inputString);
      const tokens = this.#stringTokenizer.tokenize(numbersString, delimiters);
      const numbers = this.#calculator.validateAndParseNumbers(tokens);
      const result = this.#calculator.sum(numbers);
      this.#outputHandler.printResult(result);
      
    } catch (error) {
      this.#outputHandler.printError(error.message);

      throw error;
    }
  }
}

export default App;
