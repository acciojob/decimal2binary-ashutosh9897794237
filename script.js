function decimalToBinary(num) {
  //Write you code here
	  // array to store binary number
    let binaryNum = new Array(num);
 
    // counter for binary array
    let i = 0;
    while (n > 0) {
 
        // storing remainder in binary array
        binaryNum[i] = n % 2;
        n = Math.floor(n / 2);
        i++;
    }
 
    // printing binary array in reverse order
        document.write(binaryNum[i]);

  
}

window.decimalToBinary = decimalToBinary;
