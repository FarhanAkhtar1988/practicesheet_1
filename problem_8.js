// Write a program to input any alphabet and check whether it is vowel or consonant.

function checkVowel(input) {
      let vowel = ["a", "e", "i", "o", "u"];
      for (let i = 0; i < vowel.length; i++){
        if(vowel[i] === input){
            return "It is vowel"
        }
      }
      return "It is consonant";
}
console.log(checkVowel("u"))