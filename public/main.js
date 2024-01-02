const mobileMenu = document.getElementById("mobile-nav");
const openButton = document.getElementById("open"); // Assuming you have an open button
const closeButton = document.getElementById("close"); // Assuming you have a close button

// open menu
function openMenu() {
  mobileMenu.style.display = "flex";
  openButton.style.display = "none";
  closeButton.style.display = "block";
}
function closeMenu() {
  mobileMenu.style.display = "none";
  openButton.style.display = "block";
  closeButton.style.display = "none";
}

// Function to check if the user has scrolled past the hero section
function checkScrollPastHeroSection() {
  const heroSection = document.querySelector(".hero-section");
  const backToTopButton = document.querySelector(".back-to-top");
  const enquireButtons = document.querySelectorAll(".enquire-btn");

  enquireButtons.style.display = "none";

  if (heroSection) {
    const scrollTop = window.scrollY;

    for (const enquireButton of enquireButtons) {
      enquireButton.style.display = scrollTop > 1000 ? "flex" : "none";
    }

    backToTopButton.style.display = scrollTop > 1000 ? "flex" : "none";
  }
}

// swiper js
var swiperOptions2 = {
  loop: true,
  spaceBetween: 10,
  grabCursor: false,
  slidesPerView: 6,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  noSwiping: true,
  noSwipingClass: "swiper-slide",
  speed: 4000,
  freeModeMomentum: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
};

var swiper = new Swiper(".swiper-container2", swiperOptions2);

// typing Effect
const typedTextSpan = document.querySelector(".typed-text");
const typedTextSpan1 = document.querySelector(".typed-text1");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Top B-School"];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 400;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    typedTextSpan1.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    typedTextSpan1.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 100);
});

const typedTextSpan2 = document.querySelector(".typed-text2");
const cursorSpan2 = document.querySelector(".cursor1");

const textArray1 = ["From ITM B-School"];
const typingDelay1 = 150;
const erasingDelay1 = 100;
const newTextDelay1 = 400;
let textArrayIndex1 = 0;
let charIndex1 = 0;

function type1() {
  if (charIndex1 < textArray1[textArrayIndex1].length) {
    if (!cursorSpan2.classList.contains("typing1")) {
      cursorSpan2.classList.add("typing1");
    }
    typedTextSpan2.textContent +=
      textArray1[textArrayIndex1].charAt(charIndex1);
    charIndex1++;
    setTimeout(type1, typingDelay1);
  } else {
    cursorSpan2.classList.remove("typing1");
    setTimeout(erase1, newTextDelay1);
  }
}

function erase1() {
  if (charIndex1 > 0) {
    if (!cursorSpan2.classList.contains("typing1")) {
      cursorSpan2.classList.add("typing1");
    }
    typedTextSpan2.textContent = textArray1[textArrayIndex1].substring(
      0,
      charIndex1 - 1
    );
    charIndex1--;
    setTimeout(erase1, erasingDelay1);
  } else {
    cursorSpan2.classList.remove("typing1");
    textArrayIndex1++;
    if (textArrayIndex1 >= textArray1.length) textArrayIndex1 = 0;
    setTimeout(type1, typingDelay1 + 100);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray1.length) setTimeout(type1, newTextDelay1 + 100);
});

// open modal
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
}
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

var player;

function openPopup(videoId) {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
  modal.style.display = "block";
  player = new YT.Player("player", {
    videoId: videoId,
    playerVars: {
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}
// Called when the YouTube player is ready
function onPlayerReady(event) {
  event.target.playVideo();
}

// Close the modal
function closePopup() {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "";
  modal.style.display = "none";
}

// video volume on-off

const video = document.getElementById("myVideo");
const volumeButton = document.getElementById("volumeButton");
const muteIcon = document.getElementById("muteIcon");

volumeButton.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    muteIcon.setAttribute("name", "volume-high");
  } else {
    video.muted = true;
    muteIcon.setAttribute("name", "volume-mute");
  }
});
