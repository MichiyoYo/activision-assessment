$(document).ready(() => {
  //opening modal
  $("#open-modal-btn").on("click", () => {
    $("#video-modal").fadeIn("slow", "swing").addClass("opened");
  });

  //closing modal when clicking on close button
  $("#close-modal-btn").on("click", (event) => {
    event.stopPropagation();
    closeModal();
  });

  //closing modal when pushing escape key
  $(document).on("keydown", (event) => {
    //keyCode = 27 is escape key
    if (event.keyCode == 27) {
      closeModal();
    }
  });

  //closing modal when clicking outside of its body
  $("#video-modal").on("click", function (event) {
    if (event.target === this) {
      closeModal();
    }
  });
});

function closeModal() {
  $("#video-modal").fadeOut("slow", "swing", function () {
    $(this).removeClass("opened");
  });
}
