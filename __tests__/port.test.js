const Port = require('../src/port.js');

let port;

beforeEach(() => {
 
port = new Port('Dover');

});


describe('Port constructor function', () => {
    it('returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('Port has a name', () => {
        expect(port.name).toBe('Dover');
    });
});
