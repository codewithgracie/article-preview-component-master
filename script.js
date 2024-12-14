const shareBtn = document.getElementById("share-btn");
const shareTooltip = document.getElementById("share-tooltip");

shareBtn.addEventListener("click", () => {
  // Toggle visibility of the share tooltip
  if (shareTooltip.style.visibility === "visible") {
    shareTooltip.style.visibility = "hidden";
    shareTooltip.style.opacity = "0";
  } else {
    shareTooltip.style.visibility = "visible";
    shareTooltip.style.opacity = "1";
  }
});
