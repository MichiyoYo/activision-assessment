$(document).ready(() => {
  $("#open-modal-btn").on("click", () => {
    $("#video-modal").show("fast");
    $("#video-modal").addClass("opened");
  });
});
