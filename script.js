// const reveals = document.querySelectorAll(".reveal");

// const observer = new IntersectionObserver((entries) => {

//     entries.forEach((entry) => {

//         if (entry.isIntersecting) {
//             entry.target.classList.add("active");
//         }

//     });

// }, {
//     threshold: 0.2
// });

// reveals.forEach((element) => {
//     observer.observe(element);
// });


const homeItems = document.querySelectorAll('.slide-left, .slide-right');

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // remove this line if you want it to animate only once
    }
  });
}, { threshold: 0.2 });

homeItems.forEach(el => observer1.observe(el));

const skillsItems = document.querySelectorAll('.slide-up1, .slide-up2, .slide-up3');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // remove this line if you want it to animate only once
    }
  });
}, { threshold: 0.2 });

skillsItems.forEach(el => observer2.observe(el));

