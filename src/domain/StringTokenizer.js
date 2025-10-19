class StringTokenizer {
  tokenize(numbersString, delimiters) {
    const delimiterRegex = this.#createDelimiterRegex(delimiters);
    const tokens = numbersString.split(delimiterRegex);
    const numbers = tokens.map((token) => {
      if (token.trim() === '') {
        return 0;
      }
      return Number(token);
    });

    return numbers;
  }

  #createDelimiterRegex(delimiters) {
    const escapedDelimiters = delimiters.map((d) =>
      d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    );
    return new RegExp(`[${escapedDelimiters.join('')}]`);
  }
}

export default StringTokenizer;
