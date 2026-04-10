async function getBooks() {
    const res = await fetch('/api/books');
    const books = await res.json();

    const listDiv = document.getElementById('list');
    listDiv.innerHTML = '';

    books.forEach(book => {
        const item = document.createElement('p');

        // Convert Decimal128 properly
        const price = parseFloat(book.price.$numberDecimal).toFixed(2);

        item.innerText = `${book.title} ${price} AUD`;

        item.onclick = () => loadDetails(book.id);

        listDiv.appendChild(item);
    });
}

async function loadDetails(id) {
    const res = await fetch(`/api/books/${id}`);
    const book = await res.json();

    const price = parseFloat(book.price.$numberDecimal).toFixed(2);

    document.getElementById('details').innerHTML = `
        <h3>Title: ${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Year: ${book.year}</p>
        <p>Genre: ${book.genre}</p>
        <p>Summary: ${book.summary}</p>
        <p>Price (AUD): ${price}</p>
    `;
}