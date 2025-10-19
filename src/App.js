import InputHandler from './io/InputHandler.js';

class App {
  #inputHandler= new InputHandler(); 

  async run() {
    try {
      const inputString = await this.#inputHandler.getInput();
      console.log('[inputString]', inputString);
      
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
