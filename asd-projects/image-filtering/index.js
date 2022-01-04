// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');
   
    // TODO: Call your apply function(s) here
    applyFilter(reddify);
    applyFilterNoBackground(decreaseBlue);
    applyFilterNoBackground(increaseGreenByBlue);
    



    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

var rgbString;
var rgbNumbers;
// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
for(var i = 0; i < image.length; i++) {     //applyFilter function 
        for(var y = 0; y < image[i].length; y++){
             rgbString = image[i][y]; //sets a value to rgbString
             rgbNumbers = rgbStringToArray(rgbString); //sets array of rgbNumbers to rbgStringToArray with rgbString
             filterFunction(rgbNumbers);
             keepInBounds(rgbNumbers);
             rgbNumbers = rgbArrayToString(rgbNumbers); //converts rgbNumbers back into a string
             image[i][y] = rgbNumbers; //places rgbNumbers value into the same index location rgbString was pulled out of 
        }
    }
}

// TODO 6: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
backgroundColor = image[1][1];
for(var i = 0; i < image.length; i++) {     //applyFilter function 
    for(var y = 0; y < image[i].length; y++){
         rgbString = image[i][y]; //sets a value to rgbString
         if(rgbString != backgroundColor){
            rgbNumbers = rgbStringToArray(rgbString); //sets array of rgbNumbers to rbgStringToArray with rgbString
            keepInBounds(rgbNumbers);
            filterFunction(rgbNumbers);
            rgbNumbers = rgbArrayToString(rgbNumbers); //converts rgbNumbers back into a string
            image[i][y] = rgbNumbers;
         }  
    }
}
}

applyFilterNoBackground();
// TODO 3 & 5: Create filter functions
()=>{};function reddify(array){
    array[RED] = 255; //changes value of red to 255 (tints red)
}
function decreaseBlue(array){
    array[BLUE] = array[BLUE]-50;
}
function increaseGreenByBlue(array){
    array[GREEN] = array[GREEN] + array[BLUE];
}
function keepInBounds(number){
    var result = Math.max(Math.min(number, 255), 0)
    return result;
}
console.log(keepInBounds(1,000));
console.log("test");
// CHALLENGE code goes below here
