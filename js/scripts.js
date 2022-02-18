$(document).ready(() => {
  $("#open-modal-btn").on("click", () => {
    $("#video-modal").addClass("opened");
  });

  $("#close-modal-btn, #video-modal").on("click", () => {
    $("#video-modal").removeClass("opened");
  });
});
