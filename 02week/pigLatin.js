'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  function pigLatin(word) {

  const pigLatin = (word) =>{
  if(typeof word !== "string"){
  return "Please enter valid word";
  }
  const firstLetterType = detectVowel(word);
  if(firstLetterType > 0){
  return word.slice(firstLetterType) + word.slice(0, firstLetterType) + 'ay';
  }
  return word + ("way") ;
  }
  
  const detectVowel = (word) =>{
  for(let i=0; i < word.length; i++){
  if("aeiou".indexOf(word[i]) !== -1){
  return (i);
      }
    }
  }
  pigLatin('apple');
  

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

