//get current day...
let currentDay = new Date();
const now = Date.now();

//Get Year and append to h1
const year = currentDay.getFullYear();
const yearContainer = document.getElementById('year').innerHTML = year;

//convert christmas day to mseconds in the year...

let xmas = Date.parse("December 25, 2024");

//subtract christmas day msec from current day msec...
let daysToXmas = xmas - now;

//Convert back to days from msec...
let convertedDays = daysToXmas * 0.000000011574074;

//Time to append to main container...
const countdownContainer = document.getElementById('countdownContainer').innerHTML = Math.round(convertedDays);

//Need to add a functionality that adds to the year...