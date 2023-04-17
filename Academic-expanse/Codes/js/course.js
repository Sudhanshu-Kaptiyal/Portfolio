const ug = document.querySelector('.ug-btn');
const pg = document.querySelector('.pg-btn');
const gBtnActive = document.querySelector('.g-btn-active');

ug.addEventListener('click', () => {
  gBtnActive.style.setProperty('--before-left','0');
});

pg  .addEventListener('click', () => {
    gBtnActive.style.setProperty('--before-left','55%');
});















// Get the search input and all the course titles
const SearchInput = document.getElementById("search");
const courseTitles = document.querySelectorAll(".course h2");
const noResultsMessage = document.querySelector("#search-result");

// Add event listener to the search input
SearchInput.addEventListener("input", () => {
  // Get the search query from the input value and convert it to lowercase
  const SearchQuery = SearchInput.value.toLowerCase();
  
  let resultsFound = false;
  
  // Loop through all the course titles
  courseTitles.forEach(title => {
    // Convert the course title to lowercase
    const courseTitle = title.textContent.toLowerCase();
    
    // Check if the search query is included in the course title
    if (courseTitle.includes(SearchQuery)) {
      // If it is, show the course
      title.parentElement.parentElement.style.display = "flex";
      resultsFound = true;
    } else {
      // If it's not, hide the course
      title.parentElement.parentElement.style.display = "none";
    }
  });
  
  // If no results are found, display the "No results found" message
  if (!resultsFound) {
    noResultsMessage.style.display = "flex";
  } else{
    noResultsMessage.style.display = "none";
  }
});





const ug_course = document.querySelector('.ug-btn');
const pg_course = document.querySelector('.pg-btn');

ug_course.addEventListener('click', () => {
const courses = document.querySelectorAll('.course');
  for (let i = 0; i < courses.length; i++) {
    if (i < 8) {
      courses[i].classList.remove('hide');
    } else {
      courses[i].classList.add('hide');
    }
  }
});

pg.addEventListener('click', () => {
  const courses = document.querySelectorAll('.course');
  for (let i = 0; i < courses.length; i++) {
    if (i < 8) {
      courses[i].classList.add('hide');
    } else {
      courses[i].classList.remove('hide');
    }
  }
});






