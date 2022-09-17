const initialState: any  = []

const notesReducer = (state = initialState , action: any) => {
  switch (action.type) {
  case 'SET_NOTES':
    return state.concat(action.notes)
  // case 'CHANGE_UNREAD':{
  //   console.log('state.unread', state.unread)
  //   const unread = !state.unread
  //   return {
  //     ...state, unread: unread
  //   }}
  default:
    return state
  }
}

export const setNotes = (notes: any) => {
  return {
    type: 'SET_NOTES',
    notes
  }
}

export const typeMailChange = (typeMail: any) => {
  return {
    type: 'SET_TYPE_MAIL',
    typeMail,
  }
}




export default notesReducer