function Join() {
    var sentence_1= document.getElementById(input_1).value;
    var sentence_2= document.getElementById(input_2).value;
    var final= sentence_1.join(sentence_2);
    console.log(final).innerHTML="Final_Thing";

}
