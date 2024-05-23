// Define the Car class
class Car {
    constructor(color, manufacturer) {
        this.color = color;
        this.manufacturer = manufacturer;
    }
}

// Define the RaceCar class that inherits from the Car class
class RaceCar extends Car {
    constructor(manufacturer, numberOfSeats) {
        super(null, manufacturer); // Call the parent constructor with color as null since it is not used here
        this.numberOfSeats = numberOfSeats;
    }
}

// Function to display the race car details
function displayRaceCarDetails() {
    const manufacturer = document.getElementById('manufacturer').value;
    const numberOfSeats = document.getElementById('numberOfSeats').value;
    
    // Create an instance of the RaceCar class
    const raceCar = new RaceCar(manufacturer, numberOfSeats);
    
    // Display the race car details on the webpage
    const raceCarDetailsDiv = document.getElementById('racecar-details');
    raceCarDetailsDiv.innerHTML = `<h2>RaceCar Details</h2>
                                   <p>Manufacturer: ${raceCar.manufacturer}</p>
                                   <p>Number of Seats: ${raceCar.numberOfSeats}</p>`;
}






