const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}

const showMoreWork=document.getElementById('showMoreWork');
const moreWork=document.getElementById('moreWork');
if(showMoreWork&&moreWork){showMoreWork.addEventListener('click',()=>{const opening=moreWork.hasAttribute('hidden');if(opening){moreWork.removeAttribute('hidden');showMoreWork.textContent='Show Less';showMoreWork.setAttribute('aria-expanded','true');}else{moreWork.setAttribute('hidden','');showMoreWork.textContent='View More of Our Work';showMoreWork.setAttribute('aria-expanded','false');document.getElementById('work')?.scrollIntoView({behavior:'smooth',block:'start'});}});}
