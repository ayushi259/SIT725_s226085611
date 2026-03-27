document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');

    fetch('/api/books')
        .then(res => res.json())
        .then(books => {
            books.forEach(book => {
                const card = `
                    <div class="col s12 m6 l4">
                        <div class="card hoverable">
                            <div class="card-image">
                                <img src="${book.cover}" alt="${book.title}">
                                <span class="card-title">${book.title}</span>
                            </div>
                            <div class="card-content">
                                <p><strong>Author:</strong> ${book.author}</p>
                                <p><strong>Price:</strong> ${book.price}</p>
                                <p>${book.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                bookList.innerHTML += card;
            });
        })
        .catch(err => console.error('Error fetching books:', err));
});