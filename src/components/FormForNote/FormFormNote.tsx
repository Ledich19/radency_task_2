import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeName, changeContent, changeCategory, toggleShowNoteForm } from '../../reducers/formReducer';
import React, { useEffect } from "react"
import './FormForNote.scss'
import notesServices from '../../services/noteServices';
import { appendNote, updateNote } from '../../reducers/noteReducer';
interface FormProps {
  onSubmit: any;
  setTerm: any;
}

const FormForNoteForm = () => {
  const { form, isUpdate, isOpen } = useAppSelector(state => state.notesForm)
  const dispatch = useAppDispatch()
  const visibleForm = { display: isOpen ? '' : 'none' }

  const handlerClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(toggleShowNoteForm())
  }
  const handleSave = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const note = {
      name: form.name,
      createAt: new Date().toString(),
      category: form.category,
      content: form.content,
      isArchive: false,
      //! Тимчасово id генеруеться сервером
      id: `${new Date()}${form.content}`,
    }
    try {
      const newNote = await notesServices.addNote(note)
      dispatch(appendNote(newNote))
      console.log('appendNote(newNote)', newNote);
    }
    catch (exception) {
      //   dispatch(setNotifyMessage('Wrong credentials'))
      //   setTimeout(() => {
      //     dispatch(setNotifyMessage(null))
      //   }, 5000)
      // }
    }
  }

  const handleUpdate = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const note = {
        ...form
      }
      const newNote = await notesServices.addNote(note)
      dispatch(updateNote(newNote))
      console.log('notesServices.addNote', newNote)
    }
    catch (exception) {
      //   dispatch(setNotifyMessage('Wrong credentials'))
      //   setTimeout(() => {
      //     dispatch(setNotifyMessage(null))
      //   }, 5000)
      // }
    }
  }
  // const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log('onSubmitForm')
  // }

  return (
    <div style={visibleForm} className='form-wrapper hide'  >
      <form id='note-form' method='post' action='#'>
        <span>Name: </span>
        <input onChange={(e) => dispatch(changeName(e.target.value))} value={form.name} type='text' id='note-form-name' name='name' />

        <span>Category: </span>
        <select onChange={(e) => dispatch(changeCategory(e.target.value))} value={form.category} id='note-form-category' name='category' >
          <option value='Random Thought'>Random Thought</option>
          <option value='Idea'>Idea</option>
          <option value='Task'>Task</option>
        </select>

        <span>Note: </span>
        <textarea onChange={(e) => dispatch(changeContent(e.target.value))} value={form.content} name='content' id='note-form-content'></textarea>
        {
          isUpdate ?
            <button onClick={handleUpdate} type='button' className='hide' id='save-note'>update</button>
            : <button onClick={handleSave} type='button' className='hide' id='save-note'>save</button>
        }
        <button onClick={handlerClose} id='close-form' type='button'>close</button>
      </form>
    </div>
  )
}

export default FormForNoteForm