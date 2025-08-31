
document.addEventListener('DOMContentLoaded',()=>{
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
  },{threshold:.1});
  document.querySelectorAll('.animate').forEach(el=>obs.observe(el));
});
