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
const resultBtn = document.querySelector('.resultBtn');
const header = document.querySelector("header");
const resultElement = document.querySelector(".result");
const result_ul = document.createElement('ul');

resultBtn.addEventListener('click', function(e){
    e.preventDefault();
   // Assign the element below 
    const test_element = header;
    get_bounding_result(test_element);
})

//getBoundingClientRect function result
function get_bounding_result(elementCoordinate){
 const result_coordinate = elementCoordinate.getBoundingClientRect();
    
    result_ul.innerHTML = `<li> bottom: ${result_coordinate.bottom}</li>
                            <li>height :${result_coordinate.height}</li>
                            <li>left: ${result_coordinate.left}</li>
                            <li>right: ${result_coordinate.right}</li>
                            <li>top: ${result_coordinate.top}</li>
                            <li>width: ${result_coordinate.width}</li>
                            <li>X: ${result_coordinate.x}</li>
                            <li>Y: ${result_coordinate.y}</li>`;

     resultElement.prepend(result_ul);  
};

//viewport cordinate: relative to the window
console.log('height and width viewport:', document.documentElement.clientHeight, document.documentElement.clientWidth);

//scrolling co ordinate : relative to the document/page
console.log('current scroll (X,Y)', window.pageXOffset, window.pageYOffset);

// formular to scroll TO object
 window.scrollTo({
    left: element.left + window.pageXOffset,
    top: element.top + window.pageYOffset,
    behavior: 'smooth'
 });