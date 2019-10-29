/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of displayMessage() */
function greet(str){
  let hour = parseInt(str, 10);
  if(hour < 12) 
  return "Good Morning"
  if (hour > 17) 
  return "Good Evening"
  if(hour <= 0 || hour > 24)
  return "wrong time"
  else 
  return "Good Afternoon"
  
}

function displayMessage(str){
  document.getElementById('greeting').innerText = str;
}