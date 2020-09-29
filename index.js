var randNumb=Math.floor(Math.random()*100);
function submitNumber(){
  let ipText=document.getElementById('inputTxt').value;
   if(ipText<randNumb){
       document.getElementById('clueText').innerHTML="You guessed too low!";
   }
   else if(ipText>randNumb){
    document.getElementById('clueText').innerHTML="You guessed too high!";
   }
   else{
    document.getElementById('clueText').innerHTML="You guessed right,your number was "+ipText;
   }
}