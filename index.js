//a function which accepts 2 parameters using a for loop
//build a for loop = number of times :: i=0, sets the variable; i<, defines the condition; i++, increases a value
function theBeatlesPlay(musicians,instruments){
  var phrases = [];
  for (var i=0; i < musicians.length; i++){
    phrases.push(musicians[i]+" "+"plays"+" "+instruments[i]);
  }
  return phrases
}

//a function that accepts one argument and an array of facts
//build a while loop = specified condition is true
function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn how to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [];
  var i=0
  //defines the condition
  while (i < facts.length){
    newFacts.push(facts[i]+"!!!")
    i++;
  }
  return newFacts;
}
