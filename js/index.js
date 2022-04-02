
// let collapsibleHeaders = document.getElementsByClassName('collapsible__header');

// Array.from(collapsibleHeaders).forEach(header => {
//     header.addEventListener('click', () => {
//         header.parentElement.classList.toggle('collapsible--open');
//     });
// });
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      // accordion is open
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

//object
//  {elm: '#acordition-ul'}
// function accordion(_obj) {
//     var elm_string = _obj.elm
//     if(document.getElementById(elm_string) !== null) {
//         var elm = document.getElementById(elm_string)
//         console.log(elm);
//         elm.addEventListener('click', function(e) {
//             if(e.target.matches('.tab')) {
//               console.log(e.target.parentElement);
//               if(e.target.parentElement.classList.contains('active')) {
//                 e.target.parentElement.classList.remove('active');
//               } else {
//                 e.target.parentElement.classList.add('active');
//               }
//             }
//         })
//     }
   

// }