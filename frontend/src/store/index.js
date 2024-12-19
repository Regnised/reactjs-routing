import { createSlice, configureStore } from '@reduxjs/toolkit';

const EventsSlice = createSlice({
  name: 'events',
  initialState: { items: [] },
  reducers: {
    replaceEvents(state, action) {
      console.log(action);

      state.items = action.payload;
    },
    addEvent(state, action) {
      state.items.push(action.payload);
    },
    deleteEvent(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    patchEvent(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index] = action.payload;
    },
  },
});

const EventsStore = configureStore({ reducer: EventsSlice.reducer });

export const EventsActions = EventsSlice.actions;

export default EventsStore;
