window.onload = async () => {
    try {
        const response = await fetch('/api/books');
        const books = await response.json();

        const container = document.getElementById('books-container');

        books.forEach(book => {
            const div = document.createElement('div');
            div.className = 'book';

            div.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Year: ${book.year}</p>
                <p>Genre: ${book.genre}</p>
                <p>${book.summary}</p>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error("Error fetching books:", error);
    }
};