import React from 'react';
import PropTypes from 'prop-types';

function NoteItemBody({ body }) {
  return (
    <div className="note-item__content">
      <h2 className='note-item__body'>{body}</h2>
    </div>
  );
}

NoteItemBody.propTypes = {
  body: PropTypes.string.isRequired,
}

export default NoteItemBody;