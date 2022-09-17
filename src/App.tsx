
import './App.css';
import { useAppSelector } from './app/hooks';
import CreateNoteBtn from './components/CreateNoteBtn/CreateNoteBtn';
import FormForNote from './components/FormForNote/FormForNote';
import Table from './components/Table/Table';
import TableInfoHeader from './components/TableInfoHeader/TableInfoHeader';
import TableInfoRows from './components/TableInfoRows/TableInfoRows';

import TableMainHeader from './components/TableMainHeader/TableMainHeader';
import TableMainRow from './components/TableMainRow/TableMainRow';
import ToggleArchiveBtn from './components/TogleArchiveBtn/ToggleArchiveBtn';

function App() {

  const notes = useAppSelector(state => state.notes.notes)

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

        <Table>
          <TableInfoHeader />
          <TableInfoRows />
        </Table>
      </div>



      <CreateNoteBtn />
      <ToggleArchiveBtn />
      <FormForNote />
    </div >
  );
}

export default App;
