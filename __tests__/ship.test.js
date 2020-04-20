const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

let dover;
let calais;
let itinerary;
let ship;

beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
});

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        expect(ship.currentPort).toBe(dover);
    });
    it('can set sail', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(dover);  
        expect(dover.ships).not.toContain(ship); 
    });
    it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);

    });
    it(`can't sail further than it's itinerary`, () => {
        ship.setSail();
        ship.dock();
        expect(()=>ship.setSail()).toThrowError('End of itinerary reached');
    });
    it('gets added to the port on instantianation', () =>{
      expect(dover.ships).toContain(ship);
    });
});