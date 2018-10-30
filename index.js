function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

// function sayHiToGrandma(string){
//
//   var lowercase = "hello";
//   if (string == string.toLowerCase()) {
//     // return sayHiToGrandma(string);
//     return string.toLowerCase();
//   }
//
// }

function sayHiToGrandma(string) {
    if (string === "hello".toLowerCase()) {
      //return string.toLowerCase();
      return sayHiToGrandma(string);
    }

}
