const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

let itinerary;

 

describe('Itinerary constructor function', () => {
    it('returns an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('has ports', () => {
        dover = new Port('Dover');
        calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
      });
});