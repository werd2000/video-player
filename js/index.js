const video = document.querySelector('#video');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const backward = document.querySelector('#backward');
const fastward = document.querySelector('#fastward');
const progreso = document.querySelector('#progreso');

play.addEventListener('click', handlePlay);
pause.addEventListener('click', handlePause);
backward.addEventListener('click', handleBackward);
fastward.addEventListener('click', handleFastward);
progreso.addEventListener('input', handleInput );

function handlePlay() {
    video.play();
    play.hidden = true;
    pause.hidden = false;
}

function handlePause() {
    video.pause();
    play.hidden = false;
    pause.hidden = true;
}

function handleBackward() {
    video.currentTime -= 10;
    console.log(video.currentTime);
    
}

function handleFastward() {
    video.currentTime += 10;
    console.log(video.currentTime);
    // video.
}

video.addEventListener('loadedmetadata', handleLoaded);
video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded() {
    progreso.max = video.duration;
}

function handleTimeUpdate() {
    progreso.value = video.currentTime;
}

function handleInput() {
    video.currentTime = progreso.value;    
}