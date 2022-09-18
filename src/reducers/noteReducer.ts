import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface Note {
  id: string;
  name: string;
  createAt: string;
  category: string;
  content: string;
  date: string[];
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
  notes: [
    {
      "id": "1111111",
      "name": "Dianna Rose",
      "createAt": "2022-06-11T09:38:49",
      "category": "Random Thought",
      "content": "Consequat pariatur ullamco velit est deserunt reprehenderit sit irure magna.",
      "date": [
        "2018-06-09",
        "2020-01-17"
      ],
      "isArchive": true
    },
    {
      "id": "222222",
      "name": "Catalina Horton",
      "createAt": "2015-07-27T10:52:10",
      "category": "Random Thought",
      "content": "Adipisicing adipisicing nisi ut et qui nostrud.",
      "date": [
        "2020-08-18",
      ],
      "isArchive": false
    },
    {
      "id": "333333",
      "name": "Jimenez Solis",
      "createAt": "2018-09-18T08:44:24",
      "category": "Task",
      "content": "In Lorem consequat excepteur consequat sint nisi.",
      "date": [
        "2019-10-04"
      ],
      "isArchive": false
    },
    {
      "id": "4444444",
      "name": "Cole Davenport",
      "createAt": "2015-01-12T05:42:23",
      "category": "Idea",
      "content": "Proident Lorem in nulla nisi sunt veniam eiusmod fugiat enim sit.",
      "date": [
        "2017-04-07",
        "2017-12-23"
      ],
      "isArchive": false
    },
    {
      "id": "555555",
      "name": "Petty House",
      "createAt": "2018-03-15T03:43:09",
      "category": "Idea",
      "content": "Lorem veniam tempor consequat dolor proident mollit culpa dolor eiusmod eiusmod magna.",
      "date": [
        "2021-05-18",
        "2015-10-22",
        "2018-11-11"
      ],
      "isArchive": false
    },
    {
      "id": "666666",
      "name": "Winifred Holt",
      "createAt": "2014-04-10T03:54:01",
      "category": "Idea",
      "content": "Occaecat quis dolor do culpa.",
      "date": [
        "2022-01-27",
        "2022-07-24"
      ],
      "isArchive": true
    },
    {
      "id": "777777",
      "name": "Holloway Barrett",
      "createAt": "2022-05-16T03:56:04",
      "category": "Random Thought",
      "content": "Officia deserunt enim sit id quis laborum ipsum dolor aute irure.",
      "date": [
        "2019-12-01",
        "2018-03-11"
      ],
      "isArchive": false
    },
    {
      "id": "888888",
      "name": "Cervantes Hardin",
      "createAt": "2014-02-07T10:14:14",
      "category": "Task",
      "content": "Cillum elit ullamco aliqua ad labore sit qui incididunt est.",
      "date": [
        "2022-08-01"

      ],
      "isArchive": true
    },
    {
      "id": "999999",
      "name": "Vaughn Yates",
      "createAt": "2018-11-14T11:54:01",
      "category": "Task",
      "content": "Labore cupidatat tempor est qui culpa nisi aute ad elit.",
      "date": [
        "2022-08-10"
      ],
      "isArchive": true
    },
    {
      "id": "1010101010101",
      "name": "Briana Diaz",
      "createAt": "2020-11-13T09:41:41",
      "category": "Idea",
      "content": "Ad nisi in reprehenderit nisi minim enim in do qui mollit ea et ut.",
      "date": [
        "2017-02-08"
      ],
      "isArchive": true
    }
  ],
  showArchive: false,
  err: null
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes(state, action) {
      return {...state, notes: action.payload}
    },
    appendNote(state, action) {
      state
    },
    toggleArchive(state) {
      return {...state, showArchive: !state.showArchive}
    }
}})

export const { setNotes , toggleArchive} = noteSlice.actions
export default noteSlice.reducer