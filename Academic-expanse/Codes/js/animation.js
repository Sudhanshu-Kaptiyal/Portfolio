let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration :2}});


tl.to('.animation1', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration:1.2})


tl.to('.animation2', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0,}, "-=1.25");
















//testimonial

const testimonial = document.querySelector(".Testimonials-Main");

const autoSlide = () => {
    if(testimonial.scrollLeft == (testimonial.scrollWidth - testimonial.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth;
    let valDifference = firstImgWidth - positionDiff;

    if(testimonial.scrollLeft > prevScollLeft) {
        return testimonial.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    testimonial.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

let isDragStart = false, prevPageX,isDragging = false, prevScollLeft, positionDiff;

const dragStart = (e) => {
   isDragStart = true;
   prevPageX = e.pageX;
   prevScollLeft = testimonial.scrollLeft;
}

const dragging = (e) => {
if(!isDragStart) return;
e.preventDefault();
testimonial.classList.add("dragging");
positionDiff = e.pageX - prevPageX;
testimonial.scrollLeft = prevScollLeft -positionDiff;
}

const dragStop = () =>{
isDragStart = false;
isDragging = true;
testimonial.classList.remove("dragging");

if(!isDragging) return;
isDragging = false;
autoSlide();
}


testimonial.addEventListener("mousedown", dragStart);
testimonial.addEventListener("mousemove", dragging);
testimonial.addEventListener("mouseup", dragStop);




// Slides using Buttons

const arrowIcons = document.querySelectorAll(".Testimonials button");
firstImg = testimonial.querySelectorAll(".slide")[0];



let firstImgWidth = firstImg.clientWidth + 10;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        testimonial.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
})