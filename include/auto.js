class Auto {
  constructor() { this.state = 0 }
  getState() { return this.state }
  setState(s) { this.state = s }
  getDone() { return this.state < 0 }
  next() { }
  predict() { }
  current() { }
}

module.exports = Auto;