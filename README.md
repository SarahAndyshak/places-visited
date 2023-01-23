# Places You've Been

#### By Sarah Andyshak and Eliot Gronstal

####  A website where you can keep track of all the places you've been!

## Technologies Used

* JavaScript

## Description

This is a website where you can keep track of all the places you've been made during Week 4 of Epicodus Coding School. Each destination is an object with multiple properties, like location, landmarks, time of year, notes, etc. Those properties are displayed when a user clicks on a place's name.

## TDD

Describe: function PlacesList()
* Test One
Test: "It should create an index where we can add information about different places."
Code: 
function PlacesList() 
Expected Output: No Output Expected/Undefined.

<!-- function PlacesList() {
  this.destinations = {};
  }-->

* Test Two
Test: "This test will add a method to create a new Destination within PlacesList."
Code: 
function PlacesList() {
PlacesList.prototype.addDestination = function(destination)
let destination = new Destination("Portland", ["Powells", "Multnomah Falls"], "winter", "fun!");
let destination2 = new Destination("Bend", ["Mt. Bachelor", "Pilot Butte"], "winter", "snowy!");
Expected Output: placesList;
PlacesList {destinations: {…}}


<!-- PlacesList.prototype.addDestination = function(destination) {
  this.destinations[destination.location] = destintation;
} -->

* Test Three
Test: ""
Code: 
function PlacesList() 
Expected Output:


Describe: function Destination()
* Test One
Test: "It should create a place and add information"
Code: 
let testDestination = new Destination("portland", ["powells", "multnomah falls"], "winter", "fun!");
function Destination(location, landmarks, timeOfYear, notes)
Expected Output: returns: testDestination;
Destination {location: 'portland', landmarks: Array(2), timeOfYear: 'winter', notes: 'fun!'}


## Setup/Installation Requirements

* _Not currently available, no index.html created at this time._

* Please reach out to Sarah at sarah.andyshak@gmail.com or Eliot at eliot.lauren@gmail.com with any questions or concerns.

## Known Bugs

* _As of 2:16pm on 23 January 2023, no known bugs._

## License

MIT

Copyright (c) 2023 Sarah Andyshak and Eliot Gronstal
