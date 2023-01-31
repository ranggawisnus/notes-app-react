import React from 'react';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

function NoteItemHeader({ title, createdAt }) {
  return (
    <div className="note-item__content">
      <h1 className='note-item__title'>{title}</h1>
      <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
    </div>
  );
}

NoteItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteItemHeader;