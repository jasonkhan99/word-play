$(document).ready(function() {
  $("form#wordPlay").submit(function() {
    event.preventDefault();
    const inputSentence = $("#sentence").val();
    let sentenceArray = inputSentence.split(" ");
    console.log(sentenceArray);
  });
});