import React from "react";
import PropTypes from 'prop-types';
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <>
      {notes.length !== 0 ?
        <div className="notes-list">
          {
            notes.map((note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                archived={note.archived}
                {...note} />
            ))
          }
        </div> :
        <p className="notes-list__empty-message">No notes here.</p>
      }
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default NoteList;