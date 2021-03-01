// odd or even reporter

// write a for loop to iterate from 0 to 20

  // check if the current is even or odd

  // report the result to the screen
   
  //This for loop
  console.log("For loop")
  for (var step = 0; step < 21; step ++) {
    if (step % 2 === 0) {
      console.log(step + " is even");
    } else{
      if (step % 2!=0) {
        console.log(step + " is odd");
      }
    }
  }

  //while loop
  console.log("While loop")
  var num = 0;
  while(num <= 20) {
    if(num % 2 == 0)
    console.log(num + " is even");
    else console.log(num + " is odd");
    num ++;
  }

  
  // do while loop
  console.log("Do while loop")
  var number = 0;
do{
  if(number % 2 ==0) console.log(number+" is even");
  else console.log(number+" is odd");
  number++;

}while(number <= 20);