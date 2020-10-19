import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-conent">
      <NotesAppBar />
      <div className="notes__content"
      >
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
  <textarea
    placeholder="What happended today"
    className="notes__textarea"
  />
  <div className="notes__image">
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
    alt="image"
    />
  </div>

      </div>

    </div>
  )
}
