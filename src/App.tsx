
import './App.css';
import CreateNoteBtn from './components/CreateNoteBtn/CreateNoteBtn';
import FormForNote from './components/FormForNote/FormForNote';
import TableInfoHeader from './components/TableInfoHeader/TableInfoHeader';
import TableInfoRow from './components/TableInfoRow/TableInfoRow';

import TableMainHeader from './components/TableMainHeader/TableMainHeader';
import TableMainRow from './components/TableMainRow/TableMainRow';
import ToggleArchiveBtn from './components/TogleArchiveBtn/ToggleArchiveBtn';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <div className="App__container">
        <TableMainHeader/>
        <TableMainRow/>
        <TableInfoHeader/>
        <TableInfoRow/>
        <CreateNoteBtn/>
        <ToggleArchiveBtn/>
        <FormForNote />
      </div>
    </div>
  );
}

export default App;
