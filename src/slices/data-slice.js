import { createSlice } from '@reduxjs/toolkit';
const initState = {
  db: [
    { id: 1, marque: 'BMW', isInputVisible: false, button: 'delete', remove: false },
    { id: 2, marque: 'GOLF 8', isInputVisible: false, button: 'delete', remove: false },
    { id: 3, marque: 'AUDI', isInputVisible: false, button: 'delete', remove: false },
    { id: 4, marque: 'ALPHA ROMIO', isInputVisible: false, button: 'delete', remove: false },
  ],
};

const sliceVoiture = createSlice({
  name: 'voitures',
  initialState: initState,
  reducers: {
    addVoitures: (state, action) => {
      state.db = [
        ...state.db,
        { ...action.payload, isInputVisible: false, button: 'delete' },
      ];
    },

    RemoveVoitures: (state, action) => {
      state.db = state.db.filter(voiture => voiture.id !== action.payload);
    },

    UpdateVoitures: (state, action) => {
      const { id, marque } = action.payload;
      state.db = state.db.map(voiture =>
        voiture.id == id ? { ...voiture, marque: marque } : voiture
      );
    },
    toggleInput: (state, action) => {
      state.db = state.db.map(voiture =>
        voiture.id == action.payload
          ? { ...voiture, isInputVisible: !voiture.isInputVisible }
          : voiture
      );
    },
    switchButtons: (state, action) => {
      const { id, button } = action.payload;
      state.db = state.db.map(voiture =>
        voiture.id == id ? { ...voiture, button: button } : voiture
      );
    },
    toggleRemove: (state, action) => {
      state.db = state.db.map(voiture =>
        voiture.id == action.payload
          ? { ...voiture, remove: !voiture.remove }
          : voiture
      );
    }
  },
});

export default sliceVoiture.reducer;
export const {
  addVoitures,
  RemoveVoitures,
  UpdateVoitures,
  toggleInput,
  switchButtons,
  toggleRemove
} = sliceVoiture.actions;
