
// Typing Effect
const text = ["Web Developer", "Software Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === text.length){
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typing').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type,150);
})();

// Scroll Reveal
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(el=>{
  observer.observe(el);
});

// Skill Animation
window.addEventListener('scroll',()=>{
  document.querySelectorAll('.skill-progress').forEach(bar=>{
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight){
      bar.style.width = bar.getAttribute('data-progress');
    }
  });
});

