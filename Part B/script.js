// Declare variables to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Declare variables to display time values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Declare variables for interval and stopwatch status
let interval = null;
let status = "stopped";

// Function to update the stopwatch time
function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }
  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  // Display the updated stopwatch time
  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

// Function to delay execution by a given number of milliseconds
async function delay(ms) {
  return await new Promise((resolve) => setInterval(resolve, ms));
}

// Function to start the stopwatch
async function starttimer() {
  status = "started";
  while (status !== "stopped") {
    await delay(1000);
    stopWatch();
    document.getElementById("starttimer").innerHTML = "START";
  }
}

// Function to stop the stopwatch
function stoptimer() {
  window.clearInterval(interval);
  document.getElementById("stoptimer").innerHTML = "STOP";
  status = "stopped";
}

// Function to reset the stopwatch
function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("stoptimer").innerHTML = "STOP";
}
