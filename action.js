//get the year to append in h1
let d = new Date();
let year = d.getFullYear();
document.getElementById('year').innerHTML = year;

//Setting the date for Christmas countdown
let christmasCountdown = new Date("Dec 25, 2024").getTime();

//Update the countdown for every 1 second
let x = setInterval(function() {
    //Get Today's date and time
    let now = new Date().getTime();

    //Find difference between now and countdown date
    let diff = christmasCountdown - now;

    //Time calculations
    let daysRemaining = Math.floor(diff / (1000*60*60*24));
    let hoursRemaining = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
    let minutesRemaining = Math.floor(diff % (1000*60*60) / (1000*60));
    let secondsRemaining = Math.floor(diff % (1000*60) /1000);

    //Display remaining time in countdown
    document.getElementById('countdownContainer').innerHTML = daysRemaining+ ' : ' +hoursRemaining+ ' : ' +minutesRemaining+ ' : ' +secondsRemaining;
});