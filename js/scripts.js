// Business logic for PlacesList---------

function PlacesList() {
  this.destination = {};
}

// Business Logic for Destination ---------
function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}


// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }

// let testContact = new Contact("Ada", "Lovelace", "503-555-1111");
// let Destination1 = new Destinaton("Portland", ["Powell's", "Multnomah Falls"], "winter", "Fun!")