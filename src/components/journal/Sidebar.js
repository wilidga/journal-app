import React from 'react'
import {useDispatch} from 'react-redux'
import { startLogout } from '../../actions/auth'
import { JournalEntries } from './JournalEntries'


export const Sidebar = () => {

  const dispatch = useDispatch()
  const handledLogout = () =>{
    dispatch( startLogout() )
  }

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" />
          <span> Wilman</span>
        </h3>
        <button
        className="btn"
        onClick={handledLogout}
        >
          Logout
        </button>
      </div>
      <div>

      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x" />
        <p className="mt-5">
          New Entry
        </p>
      </div>
      <JournalEntries />
    </aside>
  )
}
