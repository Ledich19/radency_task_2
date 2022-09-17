
import { BiTrash } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";

interface TableMainRowProps {
  name: string;
  createAt: number;
  category: string;
  content: string;
  dates: string;
  id: string;
}

const TableMainRowForm = ({ name, createAt, category, content, dates, id }: TableMainRowProps) => {
  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    console.log(event.target);
    console.log('handleDelete');
  };
  const handleUpdate = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    console.log(event.target);
    console.log('handleUpdate');
  };
  const handleArchive= (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    console.log(event.target);
    console.log('handleArchive');
  };

  return (
    <div className={`table-main__row row`} >
      <div className="table-main__name">{name}</div>
      <div className="table-main__created">{createAt}</div>
      <div className="table-main__category">{category}</div>
      <div className="table-main__content">{content}</div>
      <div className="table-main__dates">{dates}</div>
      <div className="table-main__buttons">
        <button onClick = {handleDelete}
          title='Update'
          className="table-main__upd"><BiHighlight /></button>
        <button onClick = {handleUpdate}
          title='Archive'
          className="table-main__arh"><BiArchiveIn /></button>
        <button onClick =  {handleArchive}
          title='Archive'
          className="table-main__del"><BiTrash /></button>
      </div>
    </div>
  )
}

export default TableMainRowForm