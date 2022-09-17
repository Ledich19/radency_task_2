import { BiTrash } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import './TableMainHeader.scss'

const TableMainHeader = () => {
  return (
    <div className="table-head row">
      <div className="table-head__name">Name</div>
      <div className="table-head__created">Created</div>
      <div className="table-head__category">Category</div>
      <div className="table-head_content">Content</div>
      <div className="table-head__dates">dates</div>
      <div className="table-head__buttons">
        <button title='archive-all' id="table__arhAll"><BiArchiveIn /></button>
        <button title='delete-all' id="table__delAll"><BiTrash /></button>
      </div>
    </div>
  )
}

export default TableMainHeader