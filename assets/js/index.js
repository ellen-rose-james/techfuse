// Popup
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const video = document.getElementById("popupVideo");

  if (popup && closePopup && video) {
    // Popup appears
    popup.style.display = "flex";

    // Close popup 
    closePopup.addEventListener("click", function () {
      popup.style.display = "none";
      video.pause(); 
      video.currentTime = 0; 
    });
  } else {
    console.error("Popup, Close Button, or Video not found in the DOM.");
  }
});

// //Menu Open Close
// const menuButton = document.getElementById("menuButton");
// const menuOverlay = document.getElementById("menuOverlay");
// const closeButton = document.getElementById("closeButton");
// const blob = document.getElementById("blob");
// let menuOpen = false;

// menuButton.addEventListener("click", () => {
//   if (!menuOpen) {
//     window.scrollTo(0, 0);
//     document.querySelector("body").style.overflowY = "hidden";
//     document.body.classList.add("menu-open");
//     menuOpen = true;
//   } else {
//     document.body.classList.remove("menu-open");
//     document.querySelector("body").style.overflowY = "scroll";
//     menuOpen = false;
//   }
// });

// closeButton.addEventListener("click", () => {
//   document.body.classList.remove("menu-open");
//   menuOpen = false;
// });

// // Blob Effect

// window.onpointermove = (event) => {
//   const { clientX, clientY } = event;

//   blob.animate(
//     {
//       left: `${clientX}px`,
//       top: `${clientY}px`,
//     },
//     { duration: 3000, fill: "forwards" }
//   );
// };

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
