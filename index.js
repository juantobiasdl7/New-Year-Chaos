let queue = [2,1,5,3,4];

//1 2 5 3 7 8 6 4


function minimumBribes(q) {
    // Write your code here
  let bribe = 0;
  let chaoticCounter = 0;
  let chaoticDecider = false;
  
  for (let i = 0; i < q.length-1; i++) {

    let counter = i;
    chaoticCounter = 0;
    console.log("Numero de iteración: " + i);      
      
    while (q[i] > q[counter+1] && q[counter+1] != q[i]-1) {
      console.log(i);      
      console.log(counter);
      counter ++;
      bribe ++;
      chaoticCounter ++;
      
      if(chaoticCounter > 2){
        chaoticDecider = true;
      }
      
    }
  }

  if(chaoticDecider == true){
    console.log("Too chaotic!");
  }else{
    console.log(bribe);
  }
  
}

minimumBribes(queue);