const url = "https://anapioficeandfire.com/api/books"

function fetchBooks() {
  fetch(url)
  .then((response) => { 
      response.json().then((data) => {
          console.log(data[5]);
          return data;
      }).catch((err) => {
          console.log(err);
      })
  });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
};

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  renderBooks(books);
});
