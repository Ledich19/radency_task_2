
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import CreateNoteBtn from './components/CreateNoteBtn/CreateNoteBtn';
import FormForNoteForm from './components/FormForNote/FormFormNote';
import Table from './components/Table/Table';
import TableInfoHeader from './components/TableInfoHeader/TableInfoHeader';
import TableInfoRows from './components/TableInfoRows/TableInfoRows';

import TableMainHeader from './components/TableMainHeader/TableMainHeader';
import TableMainRow from './components/TableMainRow/TableMainRow';
import ToggleArchiveBtn from './components/ToggleArchiveBtn/ToggleArchiveBtn';
import { useEffect } from "react"
import notesServices from './services/noteServices';
import { initialNotes} from './reducers/noteReducer';

function App() {
  const dispatch = useAppDispatch()
 

  useEffect(() => {
    async function getNotes() {
      try {
        const notes = await notesServices.getAll()
        dispatch(initialNotes(notes))
        console.log('true',notes);
      }
      catch (exception) {
        //   dispatch(setNotifyMessage('Wrong credentials'))
        //   setTimeout(() => {
        //     dispatch(setNotifyMessage(null))
        //   }, 5000)
        // }
      }
    }
    getNotes()
  }, [])

  const showArchive = useAppSelector(state => state.notes.showArchive)
  const notes = useAppSelector(state => state.notes.notes.filter((n) => n.isArchive === showArchive))

  return (
    <div className='App'>
      <header className='App-header'></header>
      <div className="App__container">
        <Table>
          <TableMainHeader />
          {notes.map((n) => {
            return <TableMainRow key={n.id} note={n} />
          })}
        </Table>

        <CreateNoteBtn />
        <ToggleArchiveBtn />


        <Table>
          <TableInfoHeader />
          <TableInfoRows />
        </Table>

        <FormForNoteForm />

      </div>
    </div >
  );
}

export default App;
