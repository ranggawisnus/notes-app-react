import React from 'react';
import PropTypes from 'prop-types';

function SearchNotes({ search, onSearch }) {
    return (
        <div className='search-note'>
            <input type='text' placeholder='Cari catatan...' value={search} onChange={(event) => onSearch(event)} />
        </div>
    );
}

SearchNotes.propTypes = {
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
}

export default SearchNotes;