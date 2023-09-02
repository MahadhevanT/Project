const addBtn = document.getElementById("add-btn");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const booksList = document.getElementById("books");

addBtn.addEventListener("click", addBook);

function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;

  if (title === "" || author === "") {
    alert("Please fill in both title and author fields.");
    return;
  }

  const bookItem = document.createElement("li");
  bookItem.className = "book-item";
  bookItem.innerHTML = `
    <span>${title} by ${author}</span>
    <button onclick="removeBook(this)">Remove</button>
  `;

  booksList.appendChild(bookItem);

  titleInput.value = "";
  authorInput.value = "";
}

function removeBook(button) {
  const bookItem = button.parentElement;
  booksList.removeChild(bookItem);
}
