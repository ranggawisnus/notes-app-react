import React from "react";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      limit: 50.
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.limit >= 0 && event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          limit: 50 - event.target.value.length,
        }
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        title: '',
        body: '',
        limit: 50,
      }
    });
  }

  render() {
    return (
      <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <p className='notes-input__title__char-limit'>Sisa karakter: {this.state.limit}</p>
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
        <textarea type="text" placeholder="Type your note..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
        <button type="submit">Add Note</button>
      </form>
    )
  }
}

NoteInput.propTypes = {
  addNotes: PropTypes.func.isRequired,
}

export default NoteInput;