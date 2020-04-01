function Ship(startingPort) {
    this.startingPort = config.startingPort;
}

Ship.prototype ={
    setSail: function () {
        this.startingPort = "";
    }
};




module.exports = Ship;