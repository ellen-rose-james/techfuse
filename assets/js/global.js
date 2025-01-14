//Menu Open Close
const menuButton = document.getElementById("menuButton");
const menuOverlay = document.getElementById("menuOverlay");
const closeButton = document.getElementById("closeButton");
let menuOpen = false;

menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    document.body.classList.add("menu-open");
    menuOpen = true;
  } else {
    document.body.classList.remove("menu-open");
    menuOpen = false;
  }
});

closeButton.addEventListener("click", () => {
  document.body.classList.remove("menu-open");
  menuOpen = false;
});

// Blob Effect
const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

// Animation on Scroll
AOS.init({
    duration: 1000, 
    once: false, 
    offset: 20,
});

// Scroll up button
let scrollUp = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   scrollUp.style.display = "block";
  } else {
   scrollUp.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// // Music Toggle Functionality
// const backgroundMusic = document.getElementById('backgroundMusic');
// const musicToggleButton = document.getElementById('musicToggleButton');
// let isPlaying = false;

// // Function to toggle music on and off
// const toggleMusic = () => {
//   if (!isPlaying) {
//     backgroundMusic.play();
//     isPlaying = true;
//     musicToggleButton.textContent = "❚❚"; // Change to pause icon
//   } else {
//     backgroundMusic.pause();
//     isPlaying = false;
//     musicToggleButton.textContent = "▶️"; // Change back to play icon
//   }
// };

// // Add event listener to toggle music when the button is clicked
// musicToggleButton.addEventListener('click', toggleMusic);

// // Play music automatically when the website loads
// window.addEventListener('load', () => {
//   backgroundMusic.play();
//   isPlaying = true;
//   musicToggleButton.textContent = "❚❚"; // Change to pause icon when music starts playing
// });
