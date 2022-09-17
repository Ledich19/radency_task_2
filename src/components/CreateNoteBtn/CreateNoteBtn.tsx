import React from 'react'
import Button from '../Button'
import './CreateNoteBtn.scss'

const createNoteHandler = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault()
  console.log(event.target);
  console.log('handleDelete');
};

const CreateNoteBtn = () => {
  return (
    <Button name='Create-note' className='create-note-btn' onClick ={ createNoteHandler } />
  )
}

export default CreateNoteBtn