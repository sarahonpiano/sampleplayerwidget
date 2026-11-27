const audioElement = document.querySelector("#audio");
const playButton = document.querySelector("#play-btn");
const pauseButton = document.querySelector("#pause-btn");
const stopButton = document.querySelector("#stop-btn");

playButton.addEventListener("click", function () {
  audioElement.play();
  playButton.style.display = "none";
  pauseButton.style.display = "inline-block";
});

pauseButton.addEventListener("click", function () {
  audioElement.pause();
  pauseButton.style.display = "none";
  playButton.style.display = "inline-block";
});

stopButton.addEventListener("click", function () {
  audioElement.pause();
  audioElement.currentTime = 0;
  pauseButton.style.display = "none";
  playButton.style.display = "inline-block";
});