import React from 'react';

function SearchNotes({ search, onSearch }) {
    return (
        <div className='search-note'>
            <input type='text' placeholder='Cari catatan...' value={search} onChange={(event) => onSearch(event)} />
        </div>
    );
}

export default SearchNotes;