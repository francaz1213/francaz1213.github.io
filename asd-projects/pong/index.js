/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();
  const BOARD_X = 0;
  const BOARD_Y = 0;
  // Game Item Objects
  var leftPaddle = createGameItem("#leftpaddle");
  var rightPaddle = createGameItem("#rightpaddle");
  var ball = createGameItem("#ball")
  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKey);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyRelease);
  startBall();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    redrawGameItem(leftPaddle);
    redrawGameItem(rightPaddle);
  }
  
  /* 
  Called in response to events.
  */
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function startBall(){
    ball.speedX = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  }
  function wallCollision(gameItem){
    
  }
  ///////////////////////////////////////////////////////////////////////////////////
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function createGameItem(id){
    var gameItem = {};
    gameItem.id = id;
    gameItem.x = parseFloat($(id).css("left"));
    gameItem.y = parseFloat($(id).css("top"));
    gameItem.width = $(id).width();
    gameItem.height = $(id).height();
    gameItem.speedY = 0;
    gameItem.speedX = 0;
    return gameItem;
  }
  //HANDLE KEY FUNCTION
  function handleKey(event) {
    if(event.which === KEY.DOWNARROW||event.which === KEY.DOWNKEY){
      handleKeyDown(event);
    }
    if(event.which === KEY.UPARROW||event.which === KEY.UPKEY){
      handleKeyUp(event);
    }
  }
  //HANDLE KEY UP FUNCTION
  function handleKeyUp(event){
    if(event.which === KEY.UPKEY){
      leftPaddle.speedY = -7.5;//set speed of leftPaddle to -7.5
      repositionGameItem(leftPaddle);
    }
    else if(event.which === KEY.UPARROW){
      rightPaddle.speedY = -7.5;//set speed of rightPaddle to -7.5
      repositionGameItem(rightPaddle);
    }
  }
  //HANDLE KEY RELEASE FUNCTION
  function handleKeyRelease(event){
    if(event.which === KEY.DOWNARROW||event.which === KEY.UPARROW){
      rightPaddle.speedY = 0;//sets speed of rightPaddle to zero when up/down arrows are released
    }
    if(event.which === KEY.DOWNKEY||event.which === KEY.UPKEY){
      leftPaddle.speedY = 0;//sets speed of leftPaddle to zero when up/down keys are released
    }
  }
  //HANDLE KEY DOWN FUNCTIOn
  function handleKeyDown(event){
    if(event.which === KEY.DOWNARROW){
      rightPaddle.speedY = 7.5;//sets speed of rightPaddle to 7.5
      repositionGameItem(rightPaddle);//reposition rightPaddle
    }
    else if(event.which === KEY.DOWNKEY){
      leftPaddle.speedY = 7.5;//sets speed of leftPaddle to 7.5
      repositionGameItem(leftPaddle);//reposition leftPaddle
    }
  }
  //REPOSITION GAMEITEM FUNCTION
  function repositionGameItem(gameItem){
    gameItem.y = gameItem.y + gameItem.speedY;//y value of gameItem equals itself plus the speedY of gameitem
    gameItem.x = gameItem.x + gameItem.speedX;//x value of gameItem equals itself plus speedX of gameItem
  }
  //REDRAW GAMEITEM FUNCTINO
  function redrawGameItem(gameItem){
    $(gameItem.id).css("top", gameItem.y);//changes the real position of game item to reflect gameitem.y
  }
  var KEY = {
    ENTER: 13,
    UPARROW: 38,
    DOWNARROW: 40,
    UPKEY: 87,
    DOWNKEY: 83,
  }
}




