// Define the Car class
class Car {
    constructor(color, manufacturer) {
        this.color = color;
        this.manufacturer = manufacturer;
    }

    getDetails() {
        return `Color: ${this.color}, Manufacturer: ${this.manufacturer}`;
    }

    getOutputValues() {
        return {
            color: this.color,
            manufacturer: this.manufacturer
        };
    }
}

// Define the RaceCar class that inherits from Car
class RaceCar extends Car {
    constructor(numberOfSeats, manufacturer) {
        super(null, manufacturer);  // Call the parent constructor with manufacturer only
        this.numberOfSeats = numberOfSeats;
    }

    getDetails() {
        return `Manufacturer: ${this.manufacturer}, Number of Seats: ${this.numberOfSeats}`;
    }

    getOutputValues() {
        return {
            manufacturer: this.manufacturer,
            numberOfSeats: this.numberOfSeats
        };
    }
}

// Function to create a Car object
function createCar() {
    const color = document.getElementById('car-color').value;
    const manufacturer = document.getElementById('car-manufacturer').value;
    const car = new Car(color, manufacturer);

    document.getElementById('car-details').innerText = car.getDetails();
    const carOutput = car.getOutputValues();
    document.getElementById('car-output').innerText = `Color: ${carOutput.color}, Manufacturer: ${carOutput.manufacturer}`;
}

// Function to create a RaceCar object
function createRaceCar() {
    const numberOfSeats = document.getElementById('racecar-seats').value;
    const manufacturer = document.getElementById('racecar-manufacturer').value;
    const raceCar = new RaceCar(numberOfSeats, manufacturer);

    document.getElementById('racecar-details').innerText = raceCar.getDetails();
    const raceCarOutput = raceCar.getOutputValues();
    document.getElementById('racecar-output').innerText = `Number of Seats: ${raceCarOutput.numberOfSeats}, Manufacturer: ${raceCarOutput.manufacturer}`;
}




