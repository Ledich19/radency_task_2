import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeName, changeContent, changeCategory, toggleShowNoteForm } from '../../reducers/formReducer';
import React, { useEffect } from "react"
import './FormForNote.scss'
interface FormProps {
  onSubmit: any;
  setTerm: any;
}

const FormForNoteForm = () => {
  const {form, isUpdate, isOpen} = useAppSelector(state => state.notesForm)
  const dispatch = useAppDispatch()
  const visibleForm = {display: isOpen ? '' : 'none'}

  useEffect(() => {
    console.log('Random Thought');
    dispatch(changeCategory('Random Thought'))
  }, [])

  const handlerClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(toggleShowNoteForm())
  }
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('onSubmitForm')
  }

  return (
    <div style={visibleForm} className='form-wrapper hide'  >
      <form onSubmit={submitForm} id='note-form' method='post' action='#'>
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

        <button type='submit' className='hide' id='save-note'>{isUpdate ? 'update': 'save'}</button>
        <button onClick={handlerClose} id='close-form' type='button'>close</button>
      </form>
    </div>
  )
}

export default FormForNoteForm