let queue = [2,1,5,3,4];
let queue2 = [1,2,5,3,7,8,6,4];
let queue3 = [5,1,2,3,7,8,6,4];
//1 2 5 3 7 8 6 4
//1 2 5 3 7 8 6 4


function minimumBribes(q) {
    // Write your code here
  let bribe = 0;
   
  for (let i = q.length-1; i >=0; i--) {
    //console.log("Iteration: " + i);
    //console.log(q[i] + " - " + (i+1) + " = " + (q[i]-(i+1)));
    if( q[i] - (i+1) > 2){
      //console.log(q[i] + " " + (i+1));
      console.log("Too chaotic");
    }

    console.log("Antes del for: " + q[i]);
    for (let j = Math.max(0, q[i] - 2); j < i; j++){
      console.log("I Index: " + i);
      console.log("I VALUE - 2: " + (q[i]-2));
      console.log("J Index: " + j);
      console.log("J Value: " + q[j]);
      console.log("Compara: " + q[j] + " con " + q[i]);
      
      if (q[j] > q[i]){
        bribe++;
        console.log("SUMO");
        console.log("--------");
      } else {
        console.log("--------");
      }
    }
          
  } 

  console.log(bribe);
}


minimumBribes(queue2);