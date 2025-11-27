const typingText = document.getElementById('typing-text');
const text = 'Halo, saya adalah contoh teks typing!';
let i = 0;

function typeText() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}

typeText();
