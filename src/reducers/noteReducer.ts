import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface Note {
  id: string;
  name: string;
  createAt: string;
  category: string;
  content: string;
  isArchive: boolean;
 }
// Define a type for the slice state
interface NotesState {
  notes: Note[],
  showArchive: boolean,
  err: null | boolean
}
// Define the initial state using that type
const initialState: NotesState = {
  notes: [],
  showArchive: false,
  err: null
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    initialNotes(state, action) {
      return {...state, notes: action.payload}
    },
    deleteNote(state, action) {
      const notes = state.notes.filter((n)=> n.id !== action.payload)
      return {...state, notes: notes}
    },
    updateNote(state, action) {
      console.log('action.payload.id ',action.payload.id );
      console.log();
      const notes = state.notes.map((n) => n.id === action.payload.id ? action.payload : n)
      return {...state, notes: notes}
    },
    appendNote(state, action) {
      return {...state, notes: state.notes.concat(action.payload)}
    },
    toggleArchive(state) {
      return {...state, showArchive: !state.showArchive}
    }
}})

export const { initialNotes , toggleArchive,deleteNote, updateNote, appendNote } = noteSlice.actions
export default noteSlice.reducer