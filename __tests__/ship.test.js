const Ship = require('../src/ship.js');

let ship;

beforeEach(() => {
  config = {
    startingPort: 'Dover',
    };
  ship = new Ship(config);
});


describe('constructor function', () => {
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        expect(ship.startingPort).toBe('Dover');;
      });
});

describe('Sailing', () => {
  it('it can set sail',() => {
    ship.setSail();
    expect(ship.startingPort).toBeFalsy;
  });
});