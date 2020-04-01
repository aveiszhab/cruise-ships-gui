function Ship(port) {
    this.currentPort = port;
}

Ship.prototype ={
    setSail: function () {
        this.currentPort = "";
    },
    dock: function (dockingPort) {
       this.currentPort = dockingPort;
    }
};




module.exports = Ship;