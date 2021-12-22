// Variables
const closeBtn = document.querySelector(".closebtn");
const openBtn = document.querySelector(".openbtn");
// Functions
const openSidebar = () =>
  (document.querySelector(".nav-links").style.right = "0");

const closeSidebar = () =>
  (document.querySelector(".nav-links").style.right = "-25rem");

// Event Handlers
openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);