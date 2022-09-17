
import { BiTrash } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";

interface TableMainRowProps {
  name: string;
  createAt: string;
  category: string;
  content: string;
  date: string;
  id: string;
  lastDate: string;
  handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleUpdate: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleArchive: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TableMainRowForm = ({lastDate, name, createAt, category, content, date, handleDelete,handleUpdate,handleArchive }: TableMainRowProps) => {
  
  return (
    <div className={`table-main__row row`} >
      <div className="table-main__name">{name}</div>
      <div className="table-main__created">{createAt}</div>
      <div className="table-main__category">{category}</div>
      <div className="table-main__content">{content}</div>
      <div title={lastDate} className="table-main__dates">{date}</div>
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