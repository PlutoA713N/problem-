const no_spaces = s.replace(' ', '');
  const cols = Math.ceil(Math.sqrt(no_spaces.length));
  let encrypted_text = "";
  for(let column=0; column<cols; column++) {
    for(let i=column; i<no_spaces.length; i+=cols) {
      encrypted_text += no_spaces[i];
    }
    encrypted_text = encrypted_text + ' ';
  }

  return encrypted_text;


// Complete the encryption function below.
function encryption(s) {
  let value = Math.ceil(Math.sqrt([...s].length));

  return [...s]
    .reduce((target, item, index) => {
      target[index % value] += item;

      return target;
    }, new Array(value).fill(""))
    .join(" ");
}
