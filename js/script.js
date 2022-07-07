if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js")
}

var notesCount = Number(window.localStorage.getItem("notesCount"));
if (!notesCount) {
  window.localStorage.setItem("notesCount", "0");
}
function removeNote(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement.parentElement;
      li.parentElement.removeChild(li);
      if (notesCount > 0) {
        notesCount -= 1;
        window.localStorage.setItem("notesCount", notesCount)
        let prevElement = e.target.previousElementSibling
        window.localStorage.removeItem(prevElement.innerText)
      }
      if (notesCount === 0) {
        document.getElementById("no-notes").classList.remove("hidden");
      }
    }
  }
}

function createNote(title, body) {
  if (notesCount > 0) {
    document.getElementById("no-notes").classList.add("hidden");
  }
  let li = document.createElement("li");
  let a = document.createElement("a");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let deleteButton = document.createElement("button");

  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", removeNote);
  let deteleButtonText = document.createTextNode("X");
  let h2TextNode = document.createTextNode(title);
  let pTextNode = document.createTextNode(body);

  h2.appendChild(h2TextNode);
  p.appendChild(pTextNode);
  deleteButton.appendChild(deteleButtonText);

  a.appendChild(h2);
  a.appendChild(deleteButton);
  a.appendChild(p);
  a.setAttribute("href", "#");

  li.appendChild(a);

  document.getElementById("notes").appendChild(li);
}

function createNodeFormInput(e) {
  e.preventDefault();

  let noteTitle = document.getElementById("new-note-title-input").value;
  let noteBody = document.getElementById("new-note-body-input").value;

  document.getElementById("new-note-title-input").value = "";
  document.getElementById("new-note-body-input").value = "";

  notesCount += 1;
  window.localStorage.setItem("notesCount", notesCount);
  window.localStorage.setItem(noteTitle, noteBody);
  createNote(noteTitle, noteBody);
}

for(i = 0; i < notesCount; i++){
    let noteTitle = window.localStorage.key(i)
    let noteBody = window.localStorage.getItem(noteTitle)
    if(noteTitle !== "notesCount" && noteTitle) createNote(noteTitle, noteBody)
}

document
  .getElementById("inputForm")
  .addEventListener("submit", createNodeFormInput, false);
