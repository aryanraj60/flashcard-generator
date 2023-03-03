import { createSlice } from "@reduxjs/toolkit";

//Function to fetch user's cards from local storage
const getDatafromLocalstorage = () => {
  const userCards = localStorage.getItem("userFlashCards");
  if (userCards) {
    return JSON.parse(userCards);
  } else {
    return [];
  }
};

const initialState = {
  userCards: getDatafromLocalstorage(), //Fetching User's Card Data from local storage to set it as initial state
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setUserCards: (state, action) => {
      state.userCards = action.payload;
    },
  },
});

export const selectUserCards = (state) => state.app.userCards; //Helper function for retrieving user cards data from the store

export const { setUserCards } = appSlice.actions; //Reducer function to update user cards data

export default appSlice.reducer;
