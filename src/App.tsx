
import './App.css';
import TableInfoHeader from './components/TableInfoHeader/TableInfoHeader';
import TableInfoRow from './components/TableInfoRow/TableInfoRow';

import TableMainHeader from './components/TableMainHeader/TableMainHeader';
import TableMainRow from './components/TableMainRow/TableMainRow';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <div className="App__container">
        <TableMainHeader/>
        < TableMainRow/>
        <TableInfoHeader/>
        <TableInfoRow/>

      </div>
    </div>
  );
}

export default App;
