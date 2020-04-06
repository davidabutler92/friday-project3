$(document).ready(function(){
  $("#numForm").submit(function(event) {
    const userInput = $("#userNumber").val();

    



    // buisness logic
    // function(params) {} or params => {}
    // Initialied a function that takes a user input
    const calNums =  userInput => {
      const arr = [];
      for(let i = 0; i <= userInput; i++) {
        const arrInput = i;       
        if(arrInput.toString().includes(1)) {
          arr.push("beep");
        } else {
          arr.push(arrInput);
        }
      }
      console.log(arr);
      // returning the array after looping
      return arr;
    }
    calNums(userInput);
  });
});

