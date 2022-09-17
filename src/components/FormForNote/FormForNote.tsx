import FormForNoteForm from "./FormForNoteForm"

const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
  // Preventing the page from reloading
  event.preventDefault();
  console.log('onSubmitForm')
  // Do something 
}

const FormForNote = () => {
  return (
    <FormForNoteForm onSubmit={submitForm} setTerm={() => {''}} />
  )
}

export default FormForNote