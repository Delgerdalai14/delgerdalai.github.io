let isStart = false;
let myTimer = null;

function hello() {
  alert('Hello');
}

function makeBigger() {
  const textarea = document.getElementById('text');
  const buttonBigger = document.getElementById('bigger-button');

  if (isStart) {
    isStart = false;
    clearInterval(myTimer);
    buttonBigger.innerText = 'Bigger Decoration!';
  } else {
    isStart = true;
    buttonBigger.innerText = 'Stop';
    myTimer = setInterval(() => {
      textarea.style.fontSize =
        parseInt(window.getComputedStyle(textarea).fontSize) + 2 + 'px';
    }, 500);
  }
}

function onChangeCheckbox(e) {
  const textarea = document.getElementById('text');
  if (e.currentTarget.checked) {
    textarea.style.fontWeight = 'bold';
    textarea.style.textDecoration = 'underline';
    textarea.style.color = 'green';
    document.body.style.backgroundImage = 'url(./100.jpg)';
  } else {
    textarea.style.fontWeight = 'normal';
    textarea.style.removeProperty('text-decoration');
    textarea.style.removeProperty('color');
    document.body.style.removeProperty('background-image');
  }
}

function malkovitch() {
  const textarea = document.getElementById('text');
  const text = textarea.value;

  textarea.value = text
    .split(' ')
    .map((str) => {
      if (str.length >= 5) {
        return 'malkovitch';
      } else {
        return str;
      }
    })
    .join(' ');
}

function pigLatin() {
  var text = document.getElementById('text').value;
  let i = 0;
  while (i < text.length) {
    if (!isVowel(text[i].toLowerCase())) {
      text += text[i];
      text = text.substring(1);
    } else {
      text += 'ay';
      break;
    }
  }
  document.getElementById('text').value = text;
}

function isVowel(c) {
  return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}
