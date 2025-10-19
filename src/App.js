import InputHandler from './io/InputHandler.js';
import OutputHandler from './io/OutputHandler.js'; 

class App {
  #inputHandler = new InputHandler();
  #outputHandler = new OutputHandler();

  async run() {
    try {
      const inputString = await this.#inputHandler.getInput()

      if (inputString === '0') {
        this.#outputHandler.printResult(0);
      }

    } catch (error) {
      this.#outputHandler.printError(error.message);
    }
  }
}

export default App;
