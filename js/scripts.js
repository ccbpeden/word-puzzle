var sentenceArray = []
var bigWordsArray = []

var vowels = ["a", "e", "i", "o", "u" ]

$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#item1").val();
    console.log('The userInput is: "' + userInput + '"');
    if (userInput) {
      
    } else alert("There is no User Input")
  });
});
