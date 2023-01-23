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
Expected Output: No Output Expected/Undefined.

<!-- PlacesList.prototype.addDestination = function(destination) {
  this.destinations[destination.location] = destintation;
} -->


Describe: function Destination()
* Test One
Test: "It should create a place and add information"
Code: 
let testDestination = new Destination("portland", ["powells", "multnomah falls"], "winter", "fun!");
function Destination(location, landmarks, timeOfYear, notes)
Expected Output: returns: testDestination;
Destination {location: 'portland', landmarks: Array(2), timeOfYear: 'winter', notes: 'fun!'}


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_

* Please reach out to Sarah at sarah.andyshak@gmail.com or Eliot at eliot.lauren@gmail.com with any questions or concerns.

## Known Bugs

* _Any known issues_
* _should go here_

## License

MIT

Copyright (c) 2023 Sarah Andyshak and Eliot Gronstal
