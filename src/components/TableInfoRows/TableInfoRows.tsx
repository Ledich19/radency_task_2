import { useAppSelector } from '../../app/hooks'
import TableInfoRowForm from './TableInfoRow'

const TableInfoRow = () => {
  const notes = useAppSelector(state => state.notes.notes)
  const SortNotes = ''

return (
    <TableInfoRowForm category='idea' all={10} archive={5} />
  )
}

export default TableInfoRow