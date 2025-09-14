const shareBtnEl = document.getElementById("btnShare");
const shareEl = document.getElementById("share");

shareBtnEl.addEventListener("click", (e) => {
  shareBtnEl.classList.toggle("btn--active");
  shareEl.classList.toggle("share--visible");
});

document.addEventListener("click", (e) => {
  if (!shareEl.contains(e.target) && !shareBtnEl.contains(e.target)) {
    shareBtnEl.classList.remove("btn--active");
    shareEl.classList.remove("share--visible");
  }
});
