import { BiTrash } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import './TableInfoHeader.scss'

const TableInfoHeader = () => {
  return (
    <div className="table-info__head table-info__row row">
      <div className="table-info__title">Category</div>
      <div className="table-info__title">active</div>
      <div className="table-info__title">archived</div>
    </div>
  )
}

export default TableInfoHeader