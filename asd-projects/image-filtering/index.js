// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');
   
    // TODO: Call your apply function(s) here
    applyFilter();




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

var rgbString;
var rgbNumbers;
// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(){
for(var i = 0; i < image.length; i++) {
        for(var y = 0; y < image[i].length; y++){
             rgbString = image[i][y];
             rgbNumbers = rgbStringToArray(rgbString); 
        }
    }
}

// TODO 6: Create the applyFilterNoBackground function


// TODO 3 & 5: Create filter functions


// CHALLENGE code goes below here
