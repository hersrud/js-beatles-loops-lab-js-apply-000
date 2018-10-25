function theBeatlesPlay(musicans,instruments){
  var musicianString
  var musicianInstrument=[];
  for (var i=0; i<musicians.length;i++){
    musicianString = musicians[i] + 'plays' + instruments[i];
    musicianInstrument[i]=musicianString;
  }
  return musicianInstrument;
}

cost facts=[
  "He was the last Beatle to learn to drive";
  "He was never a vegetarian";
  "He was a choir boy and boy scout";
  "He hated the sound of his own voice"
];
function johnLennonFacts(factsArray){
  var i=o;
  var newArray=[];
  while (factsArray.length >i){
    newArray.push('${factsArray[i]}'+"!!!");
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(n){
  var strings=[];
  do{
    n++;
    string.push("I love the Beatles!")
  }while (n<15);
  returns strings;
}