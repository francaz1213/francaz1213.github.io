/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  function handleKeyDown(event) {
    console.log("down key pressed");

  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  //pressed key handler
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }
    else if(event.which === KEY.LEFT){
      console.log("left key pressed")
    }
    else if(event.which === KEY.RIGHT){
      console.log("right key pressed")
    }
    else if(event.which === KEY.DOWN){
      console.log("down key pressed")
    }
    else if(event.which === KEY.UP){
      console.log("up key pressed")
    }
  }
//key database
  var KEY = {
    "ENTER": 13,
    "LEFT": 37,
    "RIGHT": 39,
    "UP": 38,
    "DOWN": 40
  }
  //pos and speed vars
var positionX = 0;
var positionY = 0;
var speedX = 0;
var speedY = 0;
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  }
}
function repositionGameItem(){
  positionX += speedX; // update the position of the box along the x-axis
  positionY += speedY; //update position of box along y-axis

}

function redrawGameItem(){
  $("#gameItem").css("left", positionX);    // draw the box in the new location, positionX pixels away from the "left"
  $("#gameItem").css("top", positionY);    // draw the box in the new location, positionX pixels away from the "left"

}