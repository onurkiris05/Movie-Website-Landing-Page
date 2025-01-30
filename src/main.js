const trailer = document.querySelector(".trailer");
const playTrailerBtn = document.querySelector(".play-trailer");
const closeTrailerBtn = document.querySelector(".close-trailer");
const iframe = document.getElementById("videoPlayer");

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems);
});

/**
 * Called when the YouTube Iframe API is ready.
 *
 * Creates a new YouTube player from the videoPlayer element and assigns it to the
 * player variable. Also logs a message to the console to indicate that the
 * player is ready.
 */
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("videoPlayer");
}

let checkYT = setInterval(() => {
  if (window.YT && typeof YT.Player === "function") {
    clearInterval(checkYT);
    onYouTubeIframeAPIReady();
  }
}, 100);

function toggleVideo() {
  if (player) {
    player.stopVideo();
  }
  trailer.classList.toggle("active");
}

playTrailerBtn.addEventListener("click", toggleVideo);
closeTrailerBtn.addEventListener("click", toggleVideo);

window.changeBg = function (bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");
  banner.style.background = `url("../assets/images/movies/${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });

  const iframe = document.getElementById("videoPlayer");
  if (iframe && trailerUrls[title]) {
    iframe.src = trailerUrls[title];
  }
};

const trailerUrls = {
  "the-little-mermaid": "https://www.youtube.com/embed/kpGo2_d3oYE?enablejsapi=1",
  "the-65": "https://www.youtube.com/embed/bHXejJq5vr0?si=PJ6bUCAWIkY0gXRQ?enablejsapi=1",
  "the-covenant": "https://www.youtube.com/embed/02PPMPArNEQ?si=4pfFsfXnYjDY6zNY&enablejsapi=1",
  "the-black-demon": "https://www.youtube.com/embed/z1xJAyVKAPY?si=FRatIV1TuRWMmoi4&enablejsapi=1",
  "the-tank": "https://www.youtube.com/embed/23GmhsmrCIo?si=aJbYypktafVWsn11&enablejsapi=1",
};
