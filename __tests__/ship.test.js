const Ship = require('../src/ship');
const Itinerary = require('../src/itinerary');

let dover;
let calais;
let itinerary;
let ship;

beforeEach(() => {
    const port = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
    } 

    dover = {
        ...port,
        name: 'Dover',
        ships: [],
    }

    calais = {
        ...port,
        name: 'Calais',
        ships: [],
    }

    itinerary = {
        ports: [dover, calais],
      }
   
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
        expect(dover.removeShip).toHaveBeenCalledWith(ship); 
    });
    it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        expect(calais.addShip).toHaveBeenCalledWith(ship);

    });
    it(`can't sail further than it's itinerary`, () => {
        ship.setSail();
        ship.dock();
        expect(()=>ship.setSail()).toThrowError('End of itinerary reached');
    });
    it('gets added to the port on instantianation', () =>{
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
});