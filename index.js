/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

// displayMessage() function
// ✓ updates the DOM with an appropriate message
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}


// greet() function
// ✓ Returns Good Morning before 12pm
// ✓ Returns Good Afternoon between 12pm and 5pm 
// ✓ Returns Good Evening after 5pm
function greet(timeString){
  const hour = parseInt(timeString, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}