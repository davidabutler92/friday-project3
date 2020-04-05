$(document).ready(function(){
  $("#numForm").submit(function(event) {
    const userInput = $("#userNumber").val();






    // buisness logic
    const calcNums = function(userInput) {
      const arr = [];
      // for(let i = 0; i <= parseInt(userInput); i++) {
    
      // }
      arr.push(userInput);
      return arr;
    };
    calcNums(userInput);
  });
});

