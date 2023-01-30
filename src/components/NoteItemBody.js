import React from 'react';

function NoteItemBody({ body }) {
  return (
    <div className="note-item__content">
      <h2 className='note-item__body'>{body}</h2>
    </div>
  );
}

export default NoteItemBody;