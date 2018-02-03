export default class Range {

  create(from, to) {
    return [...Array(1 + to - from).keys()].map(value => from + value);
  }
}
