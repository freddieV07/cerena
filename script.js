// let menu = document.getElementById('menu-bars');
let closed = document.getElementById('close');
// let navbar = document.querySelector('.navbar');
let slides = document.querySelectorAll('.slide');
// let slider = document.querySelectorAll('.slider');
// let content = document.querySelectorAll('.content');

// let home = document.querySelector('ihome')


// menu.onclick = () =>{
//     menu.classList.toggle('fa-times')
//     navbar.classList.toggle('active')
// }
// let section = document.querySelectorAll('.section');
// let navLinks = document.querySelectorAll('header .navbar a');
// window.onscroll = () =>{
//     menu.classList.remove('fa-times')
//     navbar.classList.remove('active')

//     section.forEach(sec =>{

//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');
    
//         if(top => offset && top < offset + height){
//           navLinks.forEach(links =>{
//             links.classList.remove('active');
//             document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
//           });
//         };
    
//       });
// }

// document.querySelector('#search-icon').onclick = () =>{
//     document.querySelector('#search-form').classList.toggle('active')
// }
// closed.onclick = () =>{
//     document.querySelector('#search-form').classList.remove('active')
// }


// let index = 0;
// function next() {
//     slides[index].classList.remove('active');
//     slides[index].classList.remove('left');
//     slides[index].classList.remove('right');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active')
//     slides[index].classList.add('right');
// }
// function test() {
//     testing[index].classList.add('active')
//     testing[index].classList.add('active')
//     index = (index + 1) % slides.length;
  
// }
// function prev() {
//     slides[index].classList.remove('right');
//     slides[index].classList.remove('left');
//     slides[index].classList.remove('active');
//     index = (index - 1 + slides.length) % slides.length;
//     slides[index].classList.add('active');
//     slides[index].classList.add('left');
// }
// // function automatic(){
    
// //     if (slider[index].classList.contains('activate')) { 
// //    setInterval(()=>{
// //     slider[index].classList.remove('activate');
// //     index = (index + 1) % slider.length;
// //     slider[index].classList.add('activate')
// //     },1000)
// //    }
// // }
// function auto(){
//     if (slides[index].classList.contains('active')) {
    
//    setInterval(()=>{
//     slides[index].classList.remove('left');
//     slides[index].classList.remove('right');
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active')
//     slides[index].classList.add('right');},10000)
// }
// }
// auto();

  
// // automatic();


// home.onclick = ()=>{
//     home.classList.add('active');
// }
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active')
}
closed.onclick = () =>{
    document.querySelector('#search-form').classList.remove('active')
}
let index = 0;
function next() {
    slides[index].classList.remove('active');
    slides[index].classList.remove('left');
    slides[index].classList.remove('right');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
    slides[index].classList.add('right');
}
function test() {
    testing[index].classList.add('active')
    testing[index].classList.add('active')
    index = (index + 1) % slides.length;
  
}
function prev() {
    slides[index].classList.remove('right');
    slides[index].classList.remove('left');
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    slides[index].classList.add('left');
}
// function automatic(){
    
//     if (slider[index].classList.contains('activate')) { 
//    setInterval(()=>{
//     slider[index].classList.remove('activate');
//     index = (index + 1) % slider.length;
//     slider[index].classList.add('activate')
//     },1000)
//    }
// }
function auto(){
    if (slides[index].classList.contains('active')) {
    
   setInterval(()=>{
    slides[index].classList.remove('left');
    slides[index].classList.remove('right');
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
    slides[index].classList.add('right');},10000)
}
}
auto();



function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;