const getStoredSaveBook = () => {
    const storedSaveBook = localStorage.getItem ('save-book')
    if (storedSaveBook) {
        return JSON.parse (storedSaveBook)
    }
   return [];
}


const saveReadeBook = id => {
    const storedSaveBooks = getStoredSaveBook ();
    const exits = storedSaveBooks.find(jobId => jobId ===id)
    if(!exits){
        storedSaveBooks.push(id)
        localStorage.setItem ('save-book',JSON.stringify (storedSaveBooks))
    }
}

export {getStoredSaveBook,saveReadeBook};