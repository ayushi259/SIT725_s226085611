const API = "http://localhost:3000/books";

async function loadBooks() {
    const res = await fetch(API);
    const books = await res.json();

    const list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach(book => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
        <hr>
        <section>
            <div id="book-list" class="book-grid">
                <article class="book-card">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                </article>
                <button class="delete-btn" onclick="deleteBook('${book._id}')" title="Delete Book">
                  <i class="fas fa-trash-alt"></i>
                </button>        
            </div>
        </section>
        `;

        list.appendChild(li);
    });
}

async function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    if (!title || !author) {
        alert("Please enter all fields");
        return;
    }

    await fetch(API, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title,
            author,
            genre: "General",
            rating: 4,
            available: true
        })
    });

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";

    loadBooks();
}

async function deleteBook(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadBooks();
}

loadBooks();