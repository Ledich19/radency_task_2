import './TableMainRow.scss'
import TableMainRowForm from './TableMainRowForm'
interface TableMainRowProps {
  note: {
    name: string;
    createAt: string;
    category: string;
    content: string;
    id: string;
  };
}

const TableMainRow = ({ note }: TableMainRowProps) => {
  const regex = /(0?[1-9]|[12][0-9]|3[01])[/\-.](0?[1-9]|1[012])[/\-.]\d{4}|\d{4}[/\-.](0?[1-9]|[12][0-9]|3[01])[/\-.](0?[1-9]|1[012])/g
  const dates = note.content.match(regex)
  console.log('dated',dates);
  const date = dates ? dates.join() : ''
  const lastDate = dates ? dates[dates.length - 1] : ''
  
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