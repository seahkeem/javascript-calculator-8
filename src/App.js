import InputHandler from './io/InputHandler.js';
import OutputHandler from './io/OutputHandler.js';
import StringParser from './domain/StringParser.js';
import StringTokenizer from './domain/StringTokenizer.js';

class App {
  #inputHandler = new InputHandler();
  #outputHandler = new OutputHandler();
  #stringParser = new StringParser();
  #stringTokenizer = new StringTokenizer();

  async run() {
    try {
      const inputString = await this.#inputHandler.getInput();

      if (inputString === '0') {
        this.#outputHandler.printResult(0);
        return;
      }

      const { delimiters, numbersString } = this.#stringParser.parse(inputString);
      const numbers = this.#stringTokenizer.tokenize(numbersString, delimiters);
      console.log('[numbers]', numbers);
      
    } catch (error) {
      this.#outputHandler.printError(error.message);
    }
  }
}

export default App;
