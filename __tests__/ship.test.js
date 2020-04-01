const Ship = require('../src/ship.js');
const Port = require('../src/port.js');


let ship;

beforeEach(() => {
 

dover = new Port('Dover')
ship = new Ship(dover);

});


describe('Ship constructor function', () => {
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
      });
});

describe('Sailing', () => {
  it('it can set sail',() => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy;
  });
});

describe('Docking', () => {
  it('it can set dock to a different port',() => {
    calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});