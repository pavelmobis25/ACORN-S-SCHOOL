// --- Mobilní menu ---
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('navbar');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// --- Animovaná vajíčka ---
const eggCount = 15; // počet vajíček
for(let i=0;i<eggCount;i++){
  const egg = document.createElement('img');
  egg.src = 'img/egg.png';
  egg.className = 'egg';
  egg.style.left = Math.random()*95 + 'vw';
  egg.style.width = (20 + Math.random()*30) + 'px';
  egg.style.animationDuration = (6 + Math.random()*6) + 's';
  egg.style.animationDelay = (Math.random()*5)+'s';
  egg.style.animationTimingFunction = 'ease-in';
  document.body.appendChild(egg);
}

// --- Klikací celé karty ---
document.querySelectorAll('.card').forEach(card => {
  const link = card.querySelector('.btn-card').getAttribute('href');
  card.addEventListener('click', () => {
    window.location.href = link;
  });
});