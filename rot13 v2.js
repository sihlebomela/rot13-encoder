function rot13(message) {
  let alphs = [['abcdefghijklm'], ['nopqrstuvwxyz']]; // to match by index
  
  // split every char
  for (arr in alphs) {
    alphs[arr] = alphs[arr].toString().split('');
  }

  let encoded = [];
  for (letter of message) {
    // check if the letter is in the 1st array or the 2nd array
    if (alphs[0].indexOf(letter) != -1) {
      //push the encoded letter that is in the same index as the original letter 
      encoded.push(alphs[1][alphs[0].indexOf(letter)]);
    } else if (alphs[1].indexOf(letter) != -1) {
      // same here but flipped
      encoded.push(alphs[0][alphs[1].indexOf(letter)]);
    } else {
      // else push it as it is a symbol or whitespace
      encoded.push(letter);
    }
  }

  return encoded.join(''); // return as string (join)

}