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
const resultElement = document.querySelector(".result");

login.addEventListener('click', function(e){
    e.preventDefault;
    const header = document.querySelector(".result");
    get_bounding_result(header);
})

function get_bounding_result(elementCoordinate){
 console.log(elementCoordinate.getBoundingClientRect());
 const result_coordinate = elementCoordinate.getBoundingClientRect();
    const result_ul = document.createElement('ul');
    result_ul.innerHTML = `<li>${result_coordinate.bottom}</li>
                            <li>${result_coordinate.height}</li>
                            <li>${result_coordinate.left}</li>
                            <li>${result_coordinate.right}</li>
                            <li>${result_coordinate.top}</li>
                            <li>${result_coordinate.width}</li>
                            <li>${result_coordinate.x}</li>
                            <li>${result_coordinate.y}</li>`;

     resultElement.prepend(result_ul);
    
};