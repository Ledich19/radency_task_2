import { BiTrash } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import './TableMainHeader.scss';
import { BiArchiveOut } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import notesServices from "../../services/noteServices";
import { initialNotes, updateNotesAll } from "../../reducers/noteReducer";

const TableMainHeader = () => {
  const dispatch = useAppDispatch()
  const showArchive = useAppSelector(state => state.notes.showArchive)
  const handleDeleteAll = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const ask = confirm('Do you want to delete everything ?')
       if (ask) {
      // якшо показуеться архів видаляеться архів якщо ні то нотатки
      const notesInDb = await notesServices.deleteNoteAll(showArchive)
      dispatch(initialNotes(notesInDb))
     }
    }
    catch (exception) {
      //   dispatch(setNotifyMessage('Wrong credentials'))
      //   setTimeout(() => {
      //     dispatch(setNotifyMessage(null))
      //   }, 5000)
      // }
    }
  };
  const handleUpdateAll = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const ask = confirm(`Do you want ${showArchive ? 'extract all notes of a note?' : 'archive all notes?'}`)
       if (ask) {
      // якшо показуеться архів видаляеться архів якщо ні то нотатки
      await notesServices.updateAll(showArchive)
      dispatch(updateNotesAll(showArchive))
     }
    }
    catch (exception) {
      //   dispatch(setNotifyMessage('Wrong credentials'))
      //   setTimeout(() => {
      //     dispatch(setNotifyMessage(null))
      //   }, 5000)
      // }
    }
  };


  return (
    <div className="table-head row">
      <div className="table-head__name">Name</div>
      <div className="table-head__created">Created</div>
      <div className="table-head__category">Category</div>
      <div className="table-head__content">Content</div>
      <div className="table-head__dates">dates</div>
      <div className="table-head__buttons">
        <button onClick={handleUpdateAll} title='archive-all' id="table__arhAll">{showArchive ? <BiArchiveOut/> : <BiArchiveIn />}</button>
        <button onClick={handleDeleteAll} title='delete-all' id="table__delAll"><BiTrash/></button>
      </div>
    </div>
  )
}

export default TableMainHeader;