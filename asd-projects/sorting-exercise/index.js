/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

function swap(array, i, j) {
    var temp = array[i]; //stores temporary value for index[1]
    array[i] = array[j]; //changes value of i to j
    array[j] = temp;//changes value of j to i
    drawSwap(array, i, j);//calls drawSwap function
}

// TODO 2: Implement bubbleSort
async function bubbleSort(array) {

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {//for loop
            if (array[i].value > array[j].value) {//if array i is less than array j
                swap(array, i, j); //swaps j and i in the array
                updateCounter(bubbleCounter);
                await sleep();
            }
        }
    }
}

// TODO 3: Implement quickSort
async function quickSort(array, left, right) {
    if (array.length > 1) {
        var index = await partition(array, left, right);//assigns partition of parameters to index
        if (left < index - 1) {
            await quickSort(array, left, index - 1);//quicksort left of index
        }
        if (right > index) {
            await quickSort(array, index, right);//quicksort right of index
        }
    }
}

// TODOs 4 & 5: Implement partition
async function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)].value;//assignts 
    while (left < right) {
        while(array[right].value > pivot){
            right -= 1;
        }
        while(array[left].value < pivot){
            left += 1;
        }
        if(right > left){
            swap(array, left, right);
            updateCounter(quickCounter);
            await sleep();
        }
    }
    return left + 1;
}



// TODO 1: Implement swap


///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep() {
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j) {
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter) {
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}