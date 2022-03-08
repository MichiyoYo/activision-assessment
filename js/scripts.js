// Implementation with vanilla JS

const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");
const modalContainer = document.getElementById("video-modal");

//open modal
openBtn.addEventListener("click", () => {
  modalContainer.classList.add("opened");
});

//closing with close button
closeBtn.addEventListener("click", (e) => {
  closeModal();
});

//closing with esc button
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    closeModal();
  }
});

//use function instead of arrow func so I can access this
modalContainer.addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

function closeModal() {
  modalContainer.classList.remove("opened");
}
