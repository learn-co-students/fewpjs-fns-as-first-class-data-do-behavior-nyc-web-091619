/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = timeString => {
  if (parseInt(timeString) < 12) {
    return 'Good Morning';
  } else if (parseInt(timeString) <= 17) {
    return 'Good Afternoon';
  }
  return 'Good Evening';
};

/* Write your implementation of displayMessage() */
const displayMessage = message => {
  const greeting = document.getElementById('greeting');
  greeting.innerText = message;
};
