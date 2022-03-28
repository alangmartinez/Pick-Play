import './search.css';

const Search = ()=>{

    const handleOnChangeSearch = (e)=>{
        console.log(e.target.value)
    }

    const resetSearch = ()=>{
        const searchInput = document.getElementById('search-input');

        if(searchInput.value == ''){
            alert('You must enter something to search')
        }
        searchInput.value = '';
    }

    return(
        <>
            <div className="search-container">
                <i 
                    className="fa-solid fa-magnifying-glass" 
                    id="search-icon"
                    onClick={resetSearch}
                >
                </i>
                <input 
                    type="text"
                    name="search"
                    id="search-input"
                    className="search-input form-control"
                    placeholder="Search..."
                    onChange={handleOnChangeSearch}
                />
            </div>
        </>
    )
}

export default Search;