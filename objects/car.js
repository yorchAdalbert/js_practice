let chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'Red',
    passaenger: 2,
    convertible: false,
    milage: 1021,
    price: 5000,
    isNew: false,
    carUsage: 'Personal',
    started: false,
    start: () => this.started = true,
    stop: () => this.started = false,
    drive: () => this.started ? 'Zoom zoom' : 'You need to start your engine first'
};

let cadi = {
    make: 'GM',
    model: 'Cadillac',
    year: 1955,
    color: 'Tan',
    passaenger: 5,
    convertible: false,
    milage: 12892,
    price: 7000,
    isNew: false,
    carUsage: 'Taxi',
    started: false,
    start: () => this.started = true,
    stop: () => this.started = false,
    drive: () => this.started ? 'Zoom zoom' : 'You need to start your engine first'
};

let fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passaenger: 2,
    convertible: false,
    milage: 8800,
    price: 2000,
    isNew: false,
    carUsage: 'Personal',
    started: false,
    fuel: 0,
    fuelCapability: 50,
    addfuel: function (amount) { 
        if (this.fuel >= this.fuelCapability)
            console.log("Car's tank is full")
        else {
            console.log('filling up the tank')
            while (this.fuel < this.fuelCapability && amount != 0) {
                this.fuel++;
                amount--;
            }
            if (amount) 
                console.log(`The car's tank is full, this ${amount} lts of gas can't be added!`);
        }
    },
    start: function () { 
        if (this.fuel)
            this.started = true;
        else
            console.log('The car is on empty, fill up before starting!');
    },
    stop: function () { this.started = false },
    drive: function () { 
        if (!this.fuel) 
            return 'Empty fuel...';
        return this.started ? 'Zoom zoom' : 'You need to start your engine first' 
    }
};

const prequal = car => car.milage <= 10000 && car.year <= 1960;

let worthALook = prequal(fiat) ? `You gotta check out this ${fiat.make} ${fiat.model}` 
                               : `You should really pass on the ${fiat.make} ${fiat.model}`; 

/*console.log(prequal(chevy));
console.log(prequal(cadi));
console.log(prequal(fiat));

console.log(worthALook);
chevy.start();
console.log(chevy.drive());
chevy.stop();
console.log(chevy.drive());

fiat.start();
console.log(fiat.drive());
fiat.stop()
console.log(fiat.drive());

for (let prop in chevy) {
    console.log(prop, chevy[prop]);
}*/

/*fiat.start()
console.log(fiat.drive());
fiat.addfuel(25);
console.log(fiat.drive());
fiat.start();
console.log(fiat.drive());*/

fiat.addfuel(25);
fiat.addfuel(30);
fiat.addfuel(25);
