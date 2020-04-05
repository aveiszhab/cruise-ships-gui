const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');

let ship;
let dover;
let calais;
let itinerary;

beforeEach(() => {
dover = new Port('Dover');
calais = new Port('Calais');
itinerary = new Itinerary([dover, calais]);
ship = new Ship(itinerary);
});


describe('Ship constructor function', () => {
  it('returns an object', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    expect(ship.currentPort).toBe(dover);
  });
  it('gets added to port on instantiation', () => {
    expect(dover.ships).toContain(ship)
  })
});

describe('Sailing', () => {
  it('it can set sail',() => {
    ship.setSail();
    expect(ship.previousPort).toBe(dover);
    expect(ship.currentPort).toBeFalsy;
    expect(dover.ships).not.toContain(ship);
  });
  it('can\'t sail further than its itinerary', () => {
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});

describe('Docking', () => {
  it('it can set dock to a different port',() => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
});

