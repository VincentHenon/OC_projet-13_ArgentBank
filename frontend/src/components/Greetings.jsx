import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../features/userProfile'
import { putUserProfile } from '../services/serviceAPI'

export default function Greetings({ data }) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const [editedName, setEditedName] = useState({ ...data })
  const [editMode, setEditMode] = useState(false)

  // render again if data has changed
  useEffect(() => {
    setEditedName({ ...data })
  }, [data])

  // toggle edit mode ON
  const enterEditMode = () => {
    setEditMode(true)
  }

  // store the changes and send it to the DB
  const saveChanges = () => {
    dispatch(updateProfile({ firstName: editedName.firstName, lastName: editedName.lastName }))
    putUserProfile({ firstName: editedName.firstName, lastName: editedName.lastName }, token)
    setEditMode(false)
  }

  // go back to the stored userProfile name
  const cancelChanges = () => {
    setEditedName({ ...data })
    setEditMode(false)
  }

  return (
    <div className="header">
      <h1>Welcome back {`${editedName.firstName || ''} ${editedName.lastName || ''}`}!</h1>
      {editMode && (
        <div className="editModeWrapper">
          <input
            type="text"
            placeholder="First Name"
            value={editedName.firstName}
            onChange={(e) => setEditedName({ ...editedName, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={editedName.lastName}
            onChange={(e) => setEditedName({ ...editedName, lastName: e.target.value })}
          />
          <div className="editModeButtonWrapper">
            <button className="save-button" onClick={saveChanges}>
              Save
            </button>
            <button className="cancel-button" onClick={cancelChanges}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {!editMode && (
        <button className="edit-button" onClick={enterEditMode}>
          Edit Name
        </button>
      )}
    </div>
  )
}