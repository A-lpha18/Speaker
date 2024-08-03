function speak(){
    var text=document.getElementById("input").value;
    var utterrance= new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterrance);
}