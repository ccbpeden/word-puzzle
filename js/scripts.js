var sentenceArray = []

var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "Y" ]

$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#item1").val();
    console.log('The userInput is: "' + userInput + '"');
    if (userInput) {
      var sentenceArray = [];
      sentenceArray = userInput.split("");
      console.log("The length of sentenceArray is " + sentenceArray.length)
      var sentenceArrayIndex = 0;
      var vowelIndex = 0;
      for(vowelIndex = 0; vowelIndex < vowels.length; vowelIndex += 1) {
        // alert(vowels[vowelIndex]);
        for (sentenceArrayIndex = 0; sentenceArrayIndex <= sentenceArray.length; sentenceArrayIndex +=1) {
          if (sentenceArray[sentenceArrayIndex] === vowels[vowelIndex]) {
            sentenceArray[sentenceArrayIndex] = "-";
          };
        };
      };
      var userOutput = sentenceArray.join("");
      console.log('The userOutput is: "' + userOutput + '"');
      $("#resultsHere").append(userOutput);
      $("#blanks").hide();
      $("#results").show();
    } else {
      alert("There is no User Input");
    };
  });
});
