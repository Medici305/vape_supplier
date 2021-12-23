// Variables
const closeBtn = document.querySelector(".closebtn");
const openBtn = document.querySelector(".openbtn");
const readMore = document.querySelector(".read-more");
const hide = document.querySelectorAll(".hide");
// Functions
const openSidebar = () =>
  (document.querySelector(".nav-links").style.right = "0");

const closeSidebar = () =>
  (document.querySelector(".nav-links").style.right = "-25rem");

const revealText = () => {
  if (readMore.innerHTML === "Read more") {
    readMore.innerHTML = "Read less";
    hide.forEach((button) => (button.style.display = "inline"));
    document.querySelector(".dot").style.display = "none";
  } else {
    readMore.innerHTML = "Read more";
    hide.forEach((button) => (button.style.display = "none"));
    document.querySelector(".dot").style.display = "inline";
  }
};

// Event Handlers
openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
readMore.addEventListener("click", revealText);
