//UI Logic
$(document).ready(function(){
  $("#numForm").submit(function(event) {
    event.preventDefault();
    const userInput = $("#userNumber").val();
 



// buisness logic
// function(params) {} or params => {}
// Initialied a function that takes a user input
// how can I dynamically generate elements for my list??
const calNums =  userInput => { 
  const arr = []; 
    for(let i = 0; i <= userInput; i++) {
        arrInput = i;       
      if(arrInput.toString().includes("3")) {
        arr.push("wont you be my neighbor?");
      } else if(arrInput.toString().includes("2")) {
          arr.push("boop");
      } else if(arrInput.toString().includes("1")) {
          arr.push("beep");
      } else {
          arr.push(arrInput);
      }
    }
    // console.log(arr);
    // returning the array after looping
    return arr;
}
    const userResults = calNums(userInput);
    $("#results").text(userResults);
 

  });
});
