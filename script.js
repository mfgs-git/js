const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));

document.getElementById('estimateForm')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent(`Estimate Request - ${data.get('service')||'HVAC Service'}`);
  const body=encodeURIComponent(`Name: ${data.get('name')||''}\nPhone: ${data.get('phone')||''}\nEmail: ${data.get('email')||''}\nService: ${data.get('service')||''}\n\nMessage:\n${data.get('message')||''}`);
  window.location.href=`mailto:BelaireNY@aol.com?subject=${subject}&body=${body}`;
});
