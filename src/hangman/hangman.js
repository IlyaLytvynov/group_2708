import './hangman.scss';

const words = ['apple', 'city', 'phone', 'camel'];

const word = words[Math.floor(Math.random() * words.length)];
const answer = [];
let totalLetters = word.length;
console.log(word);

for (let i = 0; i < totalLetters; i++) {
  answer.push('*');
}

for (let i = 0; i < word.length; i++) {
  alert(answer.join(' '));
  let letter = prompt('Enter letter');
  if (letter === null) {
    alert('Game finished!');
    break;
  }

  if (letter.length !== 1) {
    alert('Please enter single letter!');
    continue;
  }

  for (let j = 0; j < word.length; j++) {
    if (word[j] === letter) {
      answer[j] = letter;
      totalLetters--;
    }
  }
}

alert(answer.join(''));
