export default class basePage {
  // Selectors
  // Functions
  public async generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1).toString();
  }
}
