const findSum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const findFrequency = function(array) {
  // create resultObject
  var resultObject = {};
  // create object that records element occurrence tally
  var occurrenceCounter = {};
  // iterate over the array
  for (var i = 0; i < array.length; i++) {
    // if the current element does not exist in the occurrence tally object
    if (!occurrenceCounter[array[i]]) {
      //assign the current element to the object with a value of 1
      occurrenceCounter[array[i]] = 1;
    // otherwise
    } else {
      // increment the value
      occurrenceCounter[array[i]] += 1;
    }  
  }
  // create a variable for the most occurrences and assign it to zero
  var most = 0;
  // create a variable for the least occurrences and assign its value to the length of the array
  var least = array.length;
  // iterate over the occurrenceCounter
  for (var i = 0 in occurrenceCounter) {
    // if the current property's value is greater than most
    if (occurrenceCounter[i] > most) {
      // reassign most to the current property
      most = occurrenceCounter[i];
      // create maxValue variable and assign it to the key(index) of the property.
      var maxValue = i
    }

    // if the current property value is smaller than the least value
    if (occurrenceCounter[i] < least) {
      // reassign least variable to the current property
      least = occurrenceCounter[i];
      // create minValue variable and assign it to the key(index) of the property
      var minValue = i;
    }
  }
  // assign "most" key in resultObject to maxValue
  resultObject.most = maxValue;
  // assign "least" key in resultObject to minValue
  resultObject.least = minValue;
  // return result Object
  return resultObject;
}

const isPalindrome = function(str) {
  var splitString = str.split('');
  var reverseArray = splitString.reverse();
  var reversedString = reverseArray.join('');

  if (str === reversedString) {
    return true;
  } else {
    return false;
  }
};

const largestPair = function(array) {
  // create maxProduct variable and assign it to 1
  var maxProduct = 1
  // iterate over the array
  for (var i = 0; i < array.length; i++) {
    var currentElement = array[i];
    var adjacentElement = array[i + 1];
    // if current element * adjacent element is greater than maxProduct
    if ((currentElement * adjacentElement) > maxProduct) {
      // reassign maxProduct to that product
      maxProduct = currentElement * adjacentElement
    }
  }
  return maxProduct
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
