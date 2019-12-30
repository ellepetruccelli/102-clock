var noon = 12;
var evening = 18; //6PM

var wakeupTime = 9; //9AM
var lunchTime = 12; //12PM
var partyTime = 17; //5PM
var napTime = lunchTime + 2; //2PM
var time = new Date ().getHours ();

var updateClock = function() {

	var lolcat = document.getElementById('lolcat');
	var	message	= document.getElementById('timeEvent');
	var messageText;
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	if (time == partyTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		messageText = "PARTY TIME!";
	} else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "GOTTA CATCH SOME Z's";
	} else if (time == lunchTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "NOM NOM TIME!!!"
	} else if (time == wakeupTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "TIME TO GET UP!!"
	} else if (time < noon) {
		messageText = "Good morning!";
	} else if (time > evening) {
		messageText = "Good evening!";
	} else {
		messageText = "Good afternoon!";
	}

	message.innerText = messageText;
	lolcat.src = image;

	showCurrentTime();
};

var showCurrentTime = function () {
	// display string on webpage
	var clock = document.getElementById('clock');

	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	//Set Hours
	if (hours >= noon) {
		meridian = "PM";
	}
	if (hours > noon) {
		hours = hours - 12;
	}

	//Set Minutes
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	//Set Seconds
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	//Display Time By Putting Strings Together (concatenation)
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

	clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval (updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var wakeupTimeSelector = document.getElementById("wakeupTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var partyTime = false;

var partyEvent = function() {
	if (partyTime === false) {
		partyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "PARTY OVER!";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}

	else {
		partyTime = false; 
		time = new Date().getHours();
		partyTimeButton.innerText = "PARTY TIME!";
		partyTimeButton.style.backgroundColor = "#222";
	}
};

var wakeupEvent = function() {
	wakeupTime = wakeupTimeSelector.value;
};

var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);
wakeupTimeSelector.addEventListener('change', wakeupEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
