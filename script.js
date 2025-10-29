let urls = [
  "images/one.jpg",
  "images/two.jpg",
  "images/three.jpg",
  "images/four.jpg",
  "images/five.jpg",
];
let currentIndex = 0;

const imgElement = document.querySelector("img");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");
const thumbnails = document.querySelectorAll(".thumb");

function updateThumbnails() {
  imgElement.src = urls[currentIndex];
  thumbnails.forEach((thumb, index) => {
    thumb.classList.toggle("active", index === currentIndex);
  });
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % urls.length;
  updateThumbnails();
});
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + urls.length) % urls.length;
  updateThumbnails();
});

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateThumbnails();
  });
});
