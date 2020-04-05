const Port = require('../src/port.js');

let port;
let ship;

beforeEach(() => {
 
port = new Port('Dover');
ship = {};

});


describe('Port constructor function', () => {
    it('returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('Port has a name', () => {
        expect(port.name).toBe('Dover');
    });
});

describe('Add ship', () => {
    it('add a ship when a ship docks',() => {
        
        port.addShip(ship)
        expect(port.ships).toContain(ship);
    });
});
describe('Add ship', () => {
    it('remove a ship when leaves the port',() => {
        const titanic = {};
        const queenMary = {};
        
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        
        
        expect(port.ships).toEqual([titanic]);
    });
});
