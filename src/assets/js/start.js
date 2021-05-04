const btn_start = document.querySelector("#btn_start"),
  start_page = document.querySelector(".start_page");

if (start_page) {
  btn_start.addEventListener("click", () => {
    location.href = "/question";
  });
}
