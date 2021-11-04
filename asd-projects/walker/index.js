/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
var positionX;
var positionY;
var speedY;
var speedX;

function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  
  speedX = 0;
  speedY = 0;
  positionX = 0;
  positionY = 0;
  
  var KEY = {
    "ENTER": 13,
    "LEFT": 37,
    "RIGHT": 39,
    "UP": 38,
    "DOWN": 40,
  }
  

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);   
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }

//event handler when arrow key is pressed

  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      
    }
    else if(event.which === KEY.LEFT){
      
      speedX = -5;
    }
    else if(event.which === KEY.RIGHT){
      
      speedX = 5;
    }
    else if(event.which === KEY.DOWN){
      
      speedY = 5;
    }
    else if(event.which === KEY.UP){
      
      speedY = -5;
    }

  }

//resets value of speedX and speedY

  function handleKeyUp(event){
    if(event.which === KEY.LEFT || event.which === KEY.RIGHT){
      speedX = 0;
    }
    if(event.which === KEY.UP || event.which === KEY.DOWN){
      speedY = 0;
    }
  }
  
  /* 
  Called in response to events.
  */
//key database

  //pos and speed vars

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

//changes y and x pos values
function repositionGameItem(){
  positionX += speedX; // update the position of the box along the x-axis
  positionY += speedY; //update position of box along y-axis

}
//redraws gameItem
function redrawGameItem(){
  $("#gameItem").css("left", positionX);    // draw the box in the new location, positionX pixels away from the "left"
  $("#gameItem").css("top", positionY);    // draw the box in the new location, positionX pixels away from the "left"

}