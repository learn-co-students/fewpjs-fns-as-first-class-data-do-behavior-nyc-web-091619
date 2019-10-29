/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  if (parseInt(time) > 17) {
    return 'Good Evening';
  }
  else if (parseInt(time) > 12) {
    return 'Good Afternoon'; 
  }
  else {
    return 'Good Morning';
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const greeting = document.getElementById('greeting');
  greeting.innerText = message;
}