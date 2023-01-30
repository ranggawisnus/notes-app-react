import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils";
import SearchNotes from "./SearchNotes";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          }
        ]
      }
    })
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note)
    this.setState({ notes });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      }
    })
  }

  render() {
    const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))

    const activeNotes = notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNotes = notes.filter((note) => {
      return note.archived === true;
    })

    return (
      <div className="note-app__body">
        <h1>Aplikasi Note</h1>
        <SearchNotes search={this.state.search} onSearch={this.onSearchHandler} />
        <h2>Tambah Note</h2>
        <NoteInput addNotes={this.onAddNoteHandler} />
        <h2>Daftar Note</h2>
        <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        <h2>Arsip</h2>
        <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    )
  }
}

export default NoteApp