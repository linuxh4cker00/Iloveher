// JS FILE: script.js
const text = "I don’t have a fancy speech, but I have something real. You make me happy in ways I can’t explain. So here’s a simple question… Will you be mine forever?";
const typeEl = document.getElementById('typewriter');
let i = 0;

function type(){
  if(i < text.length){
    typeEl.textContent += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}
type();

const yesBtn = document.getElementById('yesBtn');
const finalMsg = document.getElementById('finalMsg');

yesBtn.addEventListener('click', ()=>{
  typeEl.textContent = "You just made my world brighter ❤️ I knew you’d say yes 🌹";
  finalMsg.style.display = 'block';
});
