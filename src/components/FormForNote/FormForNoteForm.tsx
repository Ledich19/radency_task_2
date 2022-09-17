import './FormForNote.scss'
interface FormProps {
  onSubmit: any;
  setTerm: any;
}

const FormForNoteForm = ({ onSubmit, setTerm }: FormProps) => {
  return (
    <div className='form-wrapper hide' onSubmit={onSubmit}>
      <form id='note-form' method='post' action='#'>
        <span>Name: </span>
        <input onChange={(e) => setTerm(e.target.value)} type='text' id='note-form-name' name='name' />

        <span>Category: </span>
        <select onChange={(e) => setTerm(e.target.value)} id='note-form-category' name='category' value='Random Thought'>
          <option value='Random Thought'>Random Thought</option>
          <option value='Idea'>Idea</option>
          <option value='Task'>Task</option>
        </select>

        <span>Date: </span>
        <input onChange={(e) => setTerm(e.target.value)} type='date' id='note-form-date' name='date' />

        <span>Note: </span>
        <textarea onChange={(e) => setTerm(e.target.value)} name='content' id='note-form-content'></textarea>

        <button type='button' className='hide' id='save-note'>save</button>
        <button type='button' className='hide' id='update-note'>update</button>
        <button id='close-form' type='button'>close</button>
      </form>
    </div>
  )
}

export default FormForNoteForm