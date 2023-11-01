let varify = document.getElementById("verify");
const fileInput = document.getElementById("verify-img");
const errorContainer = document.getElementById("errorContainer");

fileInput.addEventListener("click", function () {

if(fileInput.files.length == 0){
  // if (errorContainer.innerText != "") {
      varify.checked = false;
    // }
    return;
}
})
varify.addEventListener("click", function () {
  const maxSize = 40 * 1024; // 5MB in bytes
  console.log("click button");

  if (fileInput.files.length === 0) {
    errorContainer.innerText = "";
    if (errorContainer.innerText != "") {
      varify.checked = true;
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
