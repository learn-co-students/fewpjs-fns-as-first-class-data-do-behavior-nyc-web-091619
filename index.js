/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hours = parseInt(time);
  console.log(hours);
  if(hours > 18){
    return "Good Evening";
  }else if (hours > 12){
    return "Good Afternoon";
  }else{
    return "Good Morning";
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}

