function palindrome(str) {
  //initalizes variables
  let isPalindrome = true;
  const cleanReg = /[a-z0-9]/g;
  let countTo;

  const cleanArr = str.toLowerCase().match(cleanReg); //sends string to lowercase and turns it into an array, cleaning it of non-alphanumerics 
  const arrLen = cleanArr.length-1; //captures length of array
  
  //determines how far the below for loop should run, depending on whether arrLen is even or odd
  if (arrLen % 2 != 0){
    countTo = arrLen/2;
   } else {
    countTo = (arrLen-1)/2;
   }
  
  //compares each entry in the array with its mirror and sets isPalindrome to false if ever it does not match
  for (let i = 0; i < countTo; i++) {
      if (cleanArr[i] != cleanArr[arrLen-i]){
        isPalindrome = false;
      } 
  }
  
  return isPalindrome;
}

palindrome("_eye");