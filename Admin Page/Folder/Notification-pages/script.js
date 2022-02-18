let file_select = document.getElementById("file_select");
let file_upload = document.getElementById("file_upload");
file_select.onchange = () => {
  const selected = [...file_select.files];
  console.log(selected);
  file_upload.innerHTML = selected.map((file) => file.name).join("<br>");
};

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  file_upload.innerHTML = "Select File...";
  file_select.value = "";
  console.clear();
});