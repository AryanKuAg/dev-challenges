let hamburger = document.querySelector('#menu__icon');
let close = document.querySelector('#close');

let htmlCopy = document.querySelector('.container');

// hamburger.addEventListener('click', function () {
//     document.querySelector('.container').innerHTML = `<div class="cross">
//     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" id="close" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//       </svg>
// </div>
// <div id="links">
//     <a href="#" >Home</a>
//     <a href="#">Collection</a>
//     <a href="#">About</a>
//     <a href="#">Contact</a>
// </div>

// <style>
//     a{
//         padding: 20px;
//     }
//     body{
//         height: calc(100vh);
//         overflow-y: hidden;
//     }
//     #links {
//         display: flex;
//         height: calc(100vh - 50px);
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//     }
    
//     .cross{
//         height: 50px;
//         display: flex;
//         justify-content: flex-end;
        
//     }

//     #close{
//         width: 40px;
//     }
// </style>`;

// document.querySelector('#close').addEventListener('click', function () {
//     document.querySelector('.container') = htmlCopy;
//     console.log(htmlCopy)
   
//     })
    
// })


hamburger.addEventListener('click', function () {
    document.querySelector('.menu-appear').style.display = "block";
    document.querySelector('.container').style.display = "none";
    document.querySelector('body').style.overflowY = "hidden";
   
})

close.addEventListener('click', function () {
    document.querySelector('.menu-appear').style.display = "none";
    document.querySelector('.container').style.display = "block";
    document.querySelector('body').style.overflowY = "scroll";


})