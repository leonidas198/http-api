
/**
 * @returns {Promise<Object>} book information
 */
const fetchBook = async() => {

    const res = await fetch(`https://the-one-api.dev/v2/book`);
    const data = await res.json();
    console.log(data.docs[0]);
    return data.docs[0];

}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const TheLordOfTheRings = async( element ) => {

    document.querySelector('#app-title').innerHTML = 'El señor de los anillos'
    element.innerHTML = 'Loading...';
    //await fetchBook();
    const bookLabel   = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextBookBtn    = document.createElement('button');
    nextBookBtn.innerText = 'Next Book';

    const renderBook = ( data ) => {
        bookLabel.innerHTML = data.name;
        authorLabel.innerHTML = data._id;
        element.replaceChildren( bookLabel, authorLabel, nextBookBtn );
    }

    nextBookBtn.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const name = await fetchBook();
        renderBook( name );
    })


    fetchBook()
        .then( renderBook );
    

}