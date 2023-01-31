import React from "react";
import PropTypes from 'prop-types';
import NoteItemHeader from "./NoteItemHeader";
import NoteItemBody from "./NoteItemBody";
import NoteItemButton from "./NoteItemButton";

function NoteItem({ title, body, createdAt, id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemHeader title={title} createdAt={createdAt} />
      <NoteItemBody body={body} />
      <NoteItemButton id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
    </div>
  )
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default NoteItem;