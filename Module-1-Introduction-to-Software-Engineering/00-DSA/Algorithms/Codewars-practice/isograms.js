[Isograms](https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript);
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// input string
// output boolean
// loop letters in string, if current letter === any of the following letters, return false
// go to next letter
// if you get to the second to last letter, and the last letter isn't a repeat, return true

const isogram = (s) => {
    let text = s.toLowerCase();
    let iso = true;
    for(let i = 0; i < text.length; i++){
        if(iso = false){
            break;
        }
        let remainder = text.slice(i++);
        if(remainder.includes(text[i])){
            iso = false;
        }
    };
}

function isIsogram(str){
    console.log(str);
      let text = str.toLowerCase();
      let iso = true;
      for(let i = 0; i < text.length; i++){
          if(iso = false){
              break;
          }
          let first = text[i];
          let remainder = text.slice(i+1);
                console.log(remainder, first);
          if(remainder.includes(first)){
              iso = false;
          }else{
            iso = true;
          }
      }
      return iso;
  }