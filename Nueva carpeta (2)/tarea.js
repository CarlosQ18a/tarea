function Raises_x_to_power_n(a, b) {
    return Math.pow(a, b);
}

describe("Raises x to power n", function() {
    it("5 elevado a 1 es igual a 5", function() {
      assert.equal(pow(5, 1), 5);
    });
  
    // Mocha sólo ejecutará este bloque
    it.only("5 elevado a 2 es igual a 25", function() {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5 elevado a 3 es igual a 125", function() {
      assert.equal(pow(5, 3), 125);
    });
  });