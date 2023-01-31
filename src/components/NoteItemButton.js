import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItemButton({ id, onDelete, onArchive, archived }) {
  return (
    <div className='note-item__action'>
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
    </div>
  )
}

NoteItemButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
}

export default NoteItemButton;
