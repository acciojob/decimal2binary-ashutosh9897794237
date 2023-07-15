function decimalToBinary(num) {
  //Write you code here
	  // array to store binary number
    let binaryNum = [];

  // counter for binary array
  let i = 0;
  while (num > 0) {
    // storing remainder in binary array
    binaryNum[i] = num % 2;
    num = Math.floor(num / 2);
    i++;
  }

  // printing binary array in reverse order
  for (let j = i - 1; j >= 0; j--) {
    document.write(binaryNum[j]);
  }
  
}

window.decimalToBinary = decimalToBinary;
