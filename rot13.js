// THANK U
let lowerCaseLimit = 122

function processAndUpdate() {
  let input = document.querySelector('textarea[name="input"]');
  let output = document.querySelector('textarea[name="output"]');

  input.addEventListener('input', (ev) => {
    output.value = rot13(input.value);
  })
}

processAndUpdate();

function rot13(message) {
  let decoded = '';
  message = message.split('');
  message.forEach((char) => {
      decoded += decode(char.toLowerCase(), lowerCaseLimit)
  });
  
return decoded.split(' ').map(letter => letter.replace('undefined','z')).join(' ')
}

function decode(char, limit){
        let encodedChar = '';
        if (char.match(/[| '-\\"/~^.:,;\[\]?!&%$@*+()]/)){ // handle special characters & numbers
          return char;
        } else if (/\d/.test(char)){
          return char;
        // check if rot13 char code is greater than it case limit 
        } else if ((char.charCodeAt(0) + 13) > limit) {
          encodedChar = String.fromCharCode((char.charCodeAt(0) - 13))
          return encodedChar
        }  else if ((char.charCodeAt(0) + 13) < limit){
          encodedChar = String.fromCharCode(char.charCodeAt(0) + 13);
          return encodedChar;
        } 
}