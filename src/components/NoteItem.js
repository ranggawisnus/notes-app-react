import React from "react";
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

export default NoteItem;