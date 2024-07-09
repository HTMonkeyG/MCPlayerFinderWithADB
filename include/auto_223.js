const Auto = require("./auto.js");

/** Return the pow of 10 with the same number of digits */
function powOf10(x) { return 10 ** Math.floor(Math.log10(x)) }

/** Return the most significant digit */
function mostSignificantDigit(x) { return Math.floor(x / powOf10(x)) }

class Auto223 extends Auto {
  /**
   * Init
   * @param {*} x 
   * @param {*} z 
   * @param {*} dx 
   * @param {*} dz 
   */
  constructor(x, z, dx, dz) {
    super();
    this.x = x;
    this.z = z;
    this.dx = dx;
    this.dx = dz;
    this.delta = 0;
    this.updateDelta();
  }

  updateDelta() {
    var t = Math.max(this.dx, this.dz), u;
    t /= u = powOf10(t);
    this.delta = t > 1 ? u : u / 10;
  }

  next(i, p) {
    switch (this.state) {
      // Ensure and direction decide
      case 0:
        // Reject: player escaped
        if (!i) { this.setState(-1); break; }
        this.updateDelta();
        this.setState(this.dx > this.dz ? 1 : 2);
        break;
      // Reduce X #1
      case 1:
        var v = mostSignificantDigit(this.dx);
        this.updateDelta();
        if (i) {
          // Not 5 nor 1, then just minus 1
          if (v != 5 && v != 1)
            this.dx -= this.delta;
          // Separate 5 into 2 and 3
          else if (v == 5)
            this.dx -= 3 * this.delta;
          // If dx is pow of 10,
          // then separate 1 (10) into two parts,
          // else minus the highest 1
          else if (v == 1)
            this.dx -= this.dx - v == 0 ? 5 * this.delta : this.delta;
          break;
        } else {
          
        }
    }
  }

  predict(i, p) { }
}

module.exports = Auto223;