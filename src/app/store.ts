import { configureStore } from '@reduxjs/toolkit';
import notesFormReducer from '../reducers/formReducer';
import notesReducer from '../reducers/noteReducer';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    notesForm: notesFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
