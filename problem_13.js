// Write a program to count total number of notes in given amount.

function numOfNotes(amt) {
    let number = 0;
    let notes = [2, 5, 10, 20, 50, 100, 200, 500, 2000];

    if(amt >= 2000){
        let rem = amt % 2000;
        number = Math.floor(amt/2000); 
        amt = rem;
    }

    for (let i = notes.length; i >= 0; i--){
        if(notes[i] <= amt ){
            number += 1;
            amt = amt-notes[i]
            i =  i + 1;
        }
  }
    return number;
}

console.log(numOfNotes(761));