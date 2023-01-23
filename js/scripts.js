// Business logic for PlacesList---------
// Objects within Objects

function PlacesList() { //constructor, ie. database/index
  this.destinations = {};
}

PlacesList.prototype.addDestination = function(destination) { //method adds an entry to PlacesList
  this.destinations[destination.location] = destination; //creates city name as key for entry
}

// Business Logic for Destination ---------
function Destination(location, landmarks, timeOfYear, notes) { //function to create object
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}



// let destination = new Destination("Portland", ["Powells", "Multnomah Falls"], "winter", "fun!");
// let destination2 = new Destination("Bend", ["Mt. Bachelor", "Pilot Butte"], "winter", "snowy!");