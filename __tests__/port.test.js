const Port = require('../src/port');


let dover;
let titanic;
let queenMary;

beforeEach(() => {
    port = new Port('Dover');
    titanic = jest.fn();
    queenMary = jest.fn();
});

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name', () => {
       expect(port.name).toBe('Dover');
    });
    it('can add a ship', () => {
        port.addShip(titanic);

        expect(port.ships).toContain(titanic);
    });
    it('can remove a ship',() => {
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);

    });
});