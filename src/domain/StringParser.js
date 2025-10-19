import MESSAGES from '../constants/messages.js';

class StringParser {
  #DEFAULT_DELIMITERS = [',', ':'];
  #CUSTOM_DELIMITER_PREFIX = '//';
  #CUSTOM_DELIMITER_SUFFIX = '\\n';

  parse(inputString) {
    if (inputString.startsWith(this.#CUSTOM_DELIMITER_PREFIX)) {
      return this.#parseCustomDelimiter(inputString);
    }
    return {
      delimiters: this.#DEFAULT_DELIMITERS,
      numbersString: inputString,
    };
  }

  #parseCustomDelimiter(inputString) {
    const newlineIndex = inputString.indexOf(this.#CUSTOM_DELIMITER_SUFFIX);
    if (newlineIndex === -1) {
      throw new Error(`${MESSAGES.ERROR_PREFIX}${MESSAGES.ERROR_INCOMPLETE_DECLARATION}`);
    }

    const delimiter = inputString.substring(
      this.#CUSTOM_DELIMITER_PREFIX.length,
      newlineIndex
    );

    const numbersString = inputString.substring(
      newlineIndex + this.#CUSTOM_DELIMITER_SUFFIX.length
    );

    this.#validateCustomDelimiter(delimiter);

    return {
      delimiters: [delimiter],
      numbersString,
    };
  }
  
  #validateCustomDelimiter(delimiter) {
    const isLengthOne = delimiter.length === 1;
    const isNotSpace = delimiter !== ' ';
    const isNotNumber = Number.isNaN(Number(delimiter));
    const isNotDecimal = delimiter !== '.';

    if (!(isLengthOne && isNotSpace && isNotNumber && isNotDecimal)) {
      throw new Error(`${MESSAGES.ERROR_PREFIX}${MESSAGES.ERROR_INVALID_DELIMITER}`);
    }
  }
}

export default StringParser;
