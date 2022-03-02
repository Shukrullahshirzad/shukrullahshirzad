// code for scroll effect on navigation bar
window.addEventListener("scroll",(e)=>{
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0)
})

// code for navigation apearance
let closeBtn = document.querySelector('.nav-close');
let openBtn = document.querySelector('.nav-open');
let nav = document.querySelector('.nav-links');
openBtn.addEventListener('click',(e)=>{
   nav.classList.add('show');
});
closeBtn.addEventListener('click',(e)=>{
    nav.classList.remove('show')
});
// site file

