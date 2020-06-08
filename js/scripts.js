$(document).ready(function() {
  $("form#wordPlay").submit(function() {
    event.preventDefault();
    const inputSentence = $("#sentence").val();
    let sentenceArray = inputSentence.split(" ");
    let newArray = [];

    sentenceArray.forEach(function(element) {
      if (element.length - 1 >= 3) {
        newArray.push(element);
      }
    });
    console.log(newArray);
    let reverseArray = newArray.reverse();
    alert(reverseArray.join(" "));
  });
});