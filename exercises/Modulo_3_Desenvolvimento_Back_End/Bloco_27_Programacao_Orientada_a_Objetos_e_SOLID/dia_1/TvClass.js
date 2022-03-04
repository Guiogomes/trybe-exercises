var Tv = /** @class */ (function () {
    function Tv(name, brand, size, resolution, connections) {
        this.name = name;
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    Tv.prototype.turnOn = function (info) {
        if (info) {
            console.log("The ".concat(this.name, " is Tuning on"));
        }
        else {
            console.log("the ".concat(this.name, " is Turning off"));
        }
    };
    Tv.prototype.entries = function () {
        console.log("".concat(this.name, " has ").concat(this.connections.toString(), " entries"));
    };
    return Tv;
}());
;
var tv = new Tv('Samsung tv', 'Samsung', 42, '1980x1050', ['HDMI', 'Ethernet', 'Bluetooth', 'Digital Tv']);
console.log(tv.name);
tv.turnOn(true);
tv.turnOn(false);
tv.entries();
