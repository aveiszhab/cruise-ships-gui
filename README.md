# Cruise ship
This is a course project part of the Manchester Codes curriculum.

## Challenge
To build different objects (ships, ports, itineraries) that allow a cruise ship to operate. 

## Concepts

* Domain Modelling
* Object-oriented Programming
* Single Responsibility Principle
* Dependency inversion
* Mocks
* Spies
# Getting Started

***Fork this repository to your own account and clone it down.***
 You can find instructions on how to do this (https://help.github.com/articles/fork-a-repo/). 

 Please note that the git clone command will create a folder so make sure to navigate to the right place in your directory before typing it in.

***Navigate to to your local repository***

cd cruise-ships

***Install dependencies***

npm install

***Open your node REPL***

node

***Copy the below line***

const Ship = require('./src/ship.js');

const Port = require('./src/port.js');

const Itinerary = require('./src/itinerary.js');

## Create ports

You can create with the below command:
const dover = new Port('MyPortName');
*Before hitting enter, overwrite the name of the port*

## Create itineraries for your ships

e.g.: const itineraryTitanic = new Itinerary([dover, calais, liverpool]);

## Create the ships with itineraries

const titanic = new Ship(itineraryTitanic);

## Start sailing

You can make any of your ships to sail to the next port on the itinerary with the below command:

nameOfTheShip.setSail();

You can dock any of your ships in the next port on the itinerary with the below command:

nameOfTheShip.dock();

## Try it out

Copy the below code into your node REPL:

const Ship = require('./src/ship.js');  
const Port = require('./src/port.js');  
const Itinerary = require('./src/itinerary.js');

const dover = new Port('Dover');  
const calais = new Port('Calais');  
const liverpool = new Port('Liverpool');  
const itineraryTitanic = new Itinerary([dover, calais, liverpool]);  
const itineraryQueenMary = new Itinerary([liverpool, calais]);  
const titanic = new Ship(itineraryTitanic);  
const queenMary = new Ship(itineraryQueenMary);  


const listPorts = ports => {  
  return ports.map(port => port.name);  
};

console.log('***ITINERARIES***');  
console.log(`Titanc's itinerary: ${listPorts(itineraryTitanic.ports)}`);  
console.log(`QueenMary's Itinerary: ${listPorts(itineraryQueenMary.ports)}`);  

console.log('***PORTS STATUS BEFORE START***');  
console.log(`Number of ships docking in ${liverpool.name}: ${liverpool.ships.length}`);  
console.log(`Number of ships docking in ${dover.name}: ${dover.ships.length}`);  
console.log(`Number of ships docking in ${calais.name}: ${calais.ships.length}`);  


titanic.setSail();  
console.log('***TITANIC SETS SAIL***');  
console.log(`Titanic's previous port is: ${titanic.previousPort.name}`); 
console.log(`Titanic's current port is: ${titanic.currentPort}`);  
console.log(`Number of ships docking in ${liverpool.name}: ${liverpool.ships.length}`);  
console.log(`Number of ships docking in ${dover.name}: ${dover.ships.length}`);  
console.log(`Number of ships docking in ${calais.name}: ${calais.ships.length}`);  

queenMary.setSail();  
console.log('***QUEENMARY SETS SAIL***');  
console.log(`QueenMary's previous port is: ${queenMary.previousPort.name}`);  
console.log(`QueenMary's current port is: ${queenMary.currentPort}`);  
console.log(`Number of ships docking in ${liverpool.name}: ${liverpool.ships.  length}`);  
console.log(`Number of ships docking in ${dover.name}: ${dover.ships.length}`);  
console.log(`Number of ships docking in ${calais.name}: ${calais.ships.length}`);  

titanic.dock();  
console.log('***TITANIC DOCKS***');  
console.log(`Titanic's previous port is: ${titanic.previousPort.name}`);  
console.log(`Titanic's current port is: ${titanic.currentPort.name}`);  
console.log(`Number of ships docking in ${liverpool.name}: ${liverpool.ships.length}`);  
console.log(`Number of ships docking in ${dover.name}: ${dover.ships.length}`);  
console.log(`Number of ships docking in ${calais.name}: ${calais.ships.length}`);  

queenMary.dock();  
console.log('***QUEENMARY DOCKS***');  
console.log(`QueenMary's previous port is: ${queenMary.previousPort.name}`);  
console.log(`QueenMary's current port is: ${queenMary.currentPort.name}`);  
console.log(`Number of ships docking in ${liverpool.name}: ${liverpool.ships.length}`);  
console.log(`Number of ships docking in ${dover.name}: ${dover.ships.length}`);  
console.log(`Number of ships docking in ${calais.name}: ${calais.ships.length}`);  



