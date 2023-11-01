let varify = document.getElementById("verify");

varify.addEventListener("click", function () {
  const fileInput = document.getElementById("verify-img");
  const errorContainer = document.getElementById("errorContainer");
  const maxSize = 40 * 1024; // 5MB in bytes
  console.log("click button");

  if (fileInput.files.length === 0) {
    errorContainer.innerText = "Please select an image to upload.";
    if (errorContainer.innerText != "") {
      varify.checked = false;
    }
    return;
  }

  const file = fileInput.files[0];
  if (file.size > maxSize) {
    errorContainer.innerText = "File size exceeds the limit (5MB).";
    if (errorContainer.innerText != "") {
      varify.checked = false;
    }
    return;
  }

  errorContainer.innerText = "";
});
