
// *** Scroll efekt -> pritiskom na gumb stanica se scrola na odredeni dio stranice
const btn = document.querySelector('.button-pocetna');
btn.addEventListener('click', () => {
    document.querySelector('.dobrodosli').scrollIntoView();
});




// *** Btn za scroll na top pagea
let target = document.querySelector(".container-fluid");
let scrollToTopBtn = document.querySelector(".scrollToTopBtn")
let rootElement = document.documentElement

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn")
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
    
// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);