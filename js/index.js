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

//code for project's filter
  // select filter buttons
let buttons = document.querySelector('.shorting-menu').children;

  // select items
let item = document.querySelector('.items').children;
for(let i = 0; i <buttons.length; i++){
  buttons[i].addEventListener('click', (e)=>{
    for(let j = 0; j<buttons.length; j++){
      buttons[j].classList.remove('active')
    }
  buttons[i].classList.add('active');

  let targetData = buttons[i].getAttribute('data-filter');
  console.log(targetData);

  for(let k = 0; k<item.length; k++){
    item[k].classList.remove('show');
    item[k].classList.add('hide');

    if(item[k].getAttribute('data-item') == targetData || targetData == "all"){
      item[k].classList.remove('hide');
      item[k].classList.add('show');
    }
  }
  });
}
  