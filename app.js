// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btnToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

btnToggle.addEventListener('click', function () {
  // USING IF ELSE STATEMENT
  //   if (links.classList.contains('show-links')) {
  //     links.classList.remove('show-links');
  //   } else {
  //     links.classList.add('show-links');
  //   }
  //  USING TOGGLE FUNCTION
  links.classList.toggle('show-links');
});
