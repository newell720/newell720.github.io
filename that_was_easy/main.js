$("#easy").on("click", sayThatWasEasy);
   $(document).keypress(delegateKeypress);
   
  function sayThatWasEasy(){
var thatWasEasy = new Audio("that_was_easy.mp3");
thatWasEasy.play();
  $("#easy").trigger("click");
    }