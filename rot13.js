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
  return message.split('').map(char => {
    let encoder = 13; // 13 (because it forward by 13 letters)
    char = char.toLowerCase();
    let charCode = (char.charCodeAt(0) + encoder);
    
    (charCode > 122) ? encoder = -13 : encoder = 13; // if > than it char code limit start from a
    
    // do not encode if is not letter
    return (char.match(/[a-z]/)) ? String.fromCharCode(char.charCodeAt(0) + encoder) : char;
  
  }).join(''); // back to string
}