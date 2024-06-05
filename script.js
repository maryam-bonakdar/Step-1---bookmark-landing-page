// HamburgerMenu 
let hamMenu=document.querySelector('.logo')
let closeButton=document.querySelector('.secondli')
let minMenu = document.querySelector('.minimumUl')
hamMenu.addEventListener('click' , ()=>minMenu.classList.toggle('d-none'))
closeButton.addEventListener('click' , ()=>minMenu.classList.toggle('d-none'))


// Tabs
let tabs=document.getElementsByClassName('option')
let sections=document.getElementsByClassName('flexContainer3')
  function tabHandler(evt, index) {
    let i ;
    for (i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }
    document.getElementById(index).style.display = "flex";
    evt.currentTarget.className += " active";
  }


// DropDownlist
let coll = document.getElementsByClassName("seperator");
for(let i = 0; i < coll.length; i++){
  coll[i].addEventListener("click", ()=> {
    let contentEl = document.getElementsByClassName("content")
    contentEl[i].classList.toggle("content-auto");
    let arrow = document.getElementsByClassName("image4");
    console.log(arrow)
    arrow[i].classList.toggle("d-none");
    let arrowRed = document.getElementsByClassName("image6");
    arrowRed[i].classList.toggle("d-none");
  });}


// Email
  document.querySelector('#email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email');
    let regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email.value)) {
      document.getElementById('error-message').style.display = 'none';
      document.getElementById('email').classList.remove('invalid');
      document.getElementById('image7').style.visibility = 'hidden';

    } 
    else {
      document.getElementById('error-message').style.display = 'block';
      document.getElementById('email').classList.add('invalid');
      document.getElementById('image7').style.visibility = 'visible';
    } 
  });

  
