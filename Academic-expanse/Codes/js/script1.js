

// Sidebar
let listElements = document.querySelectorAll('.main');
let sidebarWrap = document.querySelector('.sidebar-wrap');

listElements.forEach(listItem => {
  listItem.addEventListener('click', () => {
    listElements.forEach(el => {
        //Removing class of not selected
      if (el !== listItem) {
        el.classList.remove('Active');

        el.nextElementSibling.style.maxHeight = '0';


        let rotateImg = el.querySelector('.rotate');
        rotateImg.classList.remove('rotate-180');
      }
    });

    listItem.classList.toggle('Active');

    let submenu = listItem.nextElementSibling;
    let submenuHeight = submenu.scrollHeight + 'px';

    if (submenu.style.maxHeight === submenuHeight) {
      submenu.style.maxHeight = '0';


      let rotateImg = listItem.querySelector('.rotate');

      rotateImg.classList.remove('rotate-180');

      sidebarWrap.style.maxHeight = '0';



    } else {
      submenu.style.maxHeight = submenuHeight;

      let rotateImg = listItem.querySelector('.rotate');
      

      rotateImg.classList.add('rotate-180');
      
    }
  });
});










// Video Player
var video = document.querySelector('.video');
var video2 = document.querySelector('video2')
    var juice = document.querySelector('.orange-juice');
    var btn = document.getElementById('play-pause');
    var btn2 = document.getElementById('play-pause2');
    var mainVideo = document.querySelector('c-video')


function togglePlaYPause() {
    if(video.paused){
        btn.className ="pause";
        video.play();
    }

    else {
        btn.className ="play"
        video.pause();
    }
}

btn.onclick = function(){
    togglePlaYPause();
}

















//Video 2
video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
});

var video2 = document.querySelector('video2');
var btn2 = document.getElementById('play-pause2');

function togglePlaYPause2() {
    if(video2.paused){
        btn2.className ="pause";
        video2.play();
    }

    else {
        btn2.className ="play"
        video2.pause();
    }
}

btn2.onclick = function(){
    togglePlaYPause2();
}
















// counter
        $(document).ready(function(){
            $(".counter").counterUp({
                delay:30,
                time:400
            })
        })

        $(document).ready(function(){
            $(".counter2").counterUp({
                delay:30,
                time:400
            })
        })






























//Form        
var form = document.getElementById("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobileNumber = document.getElementById("tel");
  var originalValue = mobileNumber.value;
    mobileNumber.value = mobileNumber.value.replace(/[^\d]/g, '');
  

  if (name.length < 3) {
    alert("Name field is required!");
    return;
  }


  if(originalValue !== mobileNumber.value) {
    alert("Only numerical numbers are allowed!");
  }


   if(mobileNumber.value.length > 10) {
    alert("Mobile number should be 10 digits only!");
    mobileNumber.value = mobileNumber.value.slice(0,10);
  }

  if(mobileNumber.value.length < 10) {
    alert("Mobile number should be 10 digits only!");
    mobileNumber.value = mobileNumber.value.slice(0,10);
  }


  


  if (email.length<8) {
    alert("Invalid email address!");
    return;
  }

 
  form.submit();
}























// FAQ
 
































































//Search

const universities = [
  { name: 'University of Alberta', location: 'Canada', url: 'file:///E:/Web Designing/Java Assignments/Codes/alberta.html' },
  { name: 'University of Sydney', location: 'Australia', url: 'file:///E:/Web Designing/Java Assignments/Codes/sydney.html' },
  { name: 'University of Oxford', location: 'United Kingdom', url: 'file:///E:/Web Designing/Java Assignments/Codes/oxford.html' },
  { name: 'University of London', location: 'United Kingdom', url: 'file:///E:/Web Designing/Java Assignments/Codes/london.html' },
  { name: 'University of British Columbia', location: 'Canada', url: 'file:///E:/Web Designing/Java Assignments/Codes/british_columbia.html' },
  { name: 'University of Cambridge', location: 'United Kingdom', url: 'file:///E:/Web Designing/Java Assignments/Codes/cambridge.html' },
  { name: 'University of Melbourne', location: 'Australia', url: 'file:///E:/Web Designing/Java Assignments/Codes/melbourne.html' },
  { name: 'University of Toronto', location: 'Canada', url: 'file:///E:/Web Designing/Java Assignments/Codes/uniToronto.html' },

  { name: 'Monash University', location: 'Australia', url: 'file:///E:/Web Designing/Java Assignments/Codes/monash.html' },
  { name: 'University of Manchester', location: 'United Kingdom', url: 'file:///E:/Web Designing/Java Assignments/Codes/manchester.html' },
  { name: 'University of Oxford', location: 'United Kingdom', url: 'file:///E:/Web Designing/Java Assignments/Codes/oxford.html' },
  { name: 'University of Waterloo', location: 'Canada', url: 'file:///E:/Web Designing/Java Assignments/Codes/waterloo.html' },
  { name: 'Leland Stanford Junior University', location: 'USA', url: 'file:///E:/Web Designing/Java Assignments/Codes/stanford.html' },
  { name: 'University of Galeway', location: 'Ireland', url: 'file:///E:/Web Designing/Java Assignments/Codes/galway.html' },
  { name: 'Trinity College Dublin', location: 'Ireland', url: 'file:///E:/Web Designing/Java Assignments/Codes/trinity_college.html' },
  { name: 'University of Chicago', location: 'USA', url: 'file:///E:/Web Designing/Java Assignments/Codes/chicago.html' },
];



const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function(f) {
  const query = searchInput.value.toLowerCase();
  const searchBox = document.querySelector('.search-box');

  // hide search box by default
  if (query.trim() !== '') {
    searchBox.style.display = 'block';
  } else {
    searchBox.style.display = 'none';
  }

  searchResults.innerHTML = '';
  let hasResults = false;

  for (let i = 0; i < universities.length; i++) {
    if (universities[i].name.toLowerCase().includes(query)) {
        
      const result = document.createElement('div');
      const img = document.createElement('img');
      img.src = `images/${universities[i].name.toLowerCase().replace(/\s+/g, '-')}.jpg`;

      const content = document.createElement('div');
      content.innerHTML = `
        <p><a href="file:///E:/Web Designing/Java Assignments/Codes/${universities[i].name.toLowerCase().replace(/\s+/g, '-')}.html">${universities[i].name}</a></p>
        <p>${universities[i].location}</p>
      `;

      result.appendChild(img);
      result.appendChild(content);

      searchResults.appendChild(result);
      hasResults = true;

      // open the HTML file on click
      result.addEventListener('click', function() {
        const filename = `${universities[i].name.toLowerCase().replace(/\s+/g, '-')}.html`;
        window.location.href = `file:///E:/Web Designing/Java Assignments/Codes/${filename}`;
      });
    }
  }

  // no result found
  if (!hasResults && query.trim() !== '') {
    searchResults.innerHTML = '<div>No results found.</div>';
  } else if (query.trim() === '') {
    searchResults.innerHTML = '';
  }
});





































// Testimonials































        