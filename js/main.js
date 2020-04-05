$(document).ready(function(){
  $("#numForm").submit(function(event) {
    const userInput = $("#userNumber").val();

    



    // buisness logic
    // function(params) {} or params => {}
    const loopNums = userInput => {
      const arr = [];
      for(let i = 0; i <= userInput; i++) {
        const entry = i;
        arr.push(entry);
      }
      console.log(arr);
      return arr;
    };
    loopNums(userInput);
  });
});

