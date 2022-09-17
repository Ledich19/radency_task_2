import './TableMainRow.scss'
import TableMainRowForm from './TableMainRowForm'
interface TableMainRowProps {
  note: {
    name: string;
    createAt: string;
    category: string;
    content: string;
    date: string[];
    id: string;
  };
}

const TableMainRow = ({ note }: TableMainRowProps) => {


  const dates = note.date.map((d) => {
    const date = new Date(d)
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  } )
  const date = dates.join()
  const lastDate = dates[dates.length - 1]
  const createAt = new Date(note.createAt).toLocaleString('en-US', { year: 'numeric',month: 'short',day: 'numeric',})

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('handleDelete',note.id);
  };
  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('handleUpdate',note.id);
  };
  const handleArchive = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('handleArchive',note.id);
  };

  return (
      <TableMainRowForm
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleArchive={handleArchive}
        name='something'
        createAt={createAt}
        category={note.category}
        content={note.content}
        date={date}
        id={note.id} 
        lastDate={lastDate}
        />
  )
}

export default TableMainRow