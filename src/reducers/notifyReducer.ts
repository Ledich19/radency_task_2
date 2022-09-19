import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface notifyState {
  type: string,
  text: string,
}
// Define the initial state using that type
const initialState: notifyState = {
  type: '',
  text: '',
}

const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setNotify(state, action) {
      return action.payload
    },
    removeNotify(state) {
      return {...state, type: '',text: '',}
    }
  }
})

export const {setNotify ,removeNotify } = notifySlice.actions
export default notifySlice.reducer