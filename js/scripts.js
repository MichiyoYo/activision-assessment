$(document).ready(() => {
  $("#open-modal-btn").on("click", () => {
    $("#video-modal").fadeIn("slow", "swing").addClass("opened");
  });

  $("#close-modal-btn").on("click", (event) => {
    event.stopPropagation();
    $("#video-modal").fadeOut("slow", "swing", function () {
      $(this).removeClass("opened");
    });
  });

  // $("#close-modal-btn").on("click", (event) => {
  //   event.stopPropagation();
  //   $("#video-modal").removeClass("opened");
  // });

  // $("#video-modal").click(function (event) {
  //   event.stopPropagation();
  //   $(this).removeClass("opened");
  // });
});
