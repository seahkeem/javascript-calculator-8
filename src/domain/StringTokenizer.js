class StringTokenizer {
  tokenize(numbersString, delimiters) {
    const delimiterRegex = this.#createDelimiterRegex(delimiters);
    const tokens = numbersString.split(delimiterRegex);
    return tokens;
  }

  #createDelimiterRegex(delimiters) {
    const escapedDelimiters = delimiters.map((d) =>
      d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    );
    return new RegExp(`[${escapedDelimiters.join('')}]`);
  }
}

export default StringTokenizer;
