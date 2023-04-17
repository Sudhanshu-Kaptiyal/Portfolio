
// VIDEO PLAYER

var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');


function togglePlaYPause() {
    if(video.paused){
        btn.className ="pause";
        video.play();
    }

    else {
        btn.className ="play"
        video.paused();
    }
}
