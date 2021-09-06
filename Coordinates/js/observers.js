// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("nav-scrolled");
//     } else {
//       header.classList.remove("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);


//getBoundingClientRect
const login = document.querySelector('.login');
const header = document.querySelector("header");

login.addEventListener('click', function(e){
    e.preventDefault;
    const header = document.querySelector(".home-intro");
    console.log(header.getBoundingClientRect());
    console.log();
})