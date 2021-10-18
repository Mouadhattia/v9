import { createSlice } from "@reduxjs/toolkit";
import { lobbieActions } from "./actions";

const initialState = {
  lobbies: [],
  status: null
  
};

const lobbieSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
  },
  extraReducers: {
    [lobbieActions.getAll.pending]: (state) => {
      state.status = "loading";
    },
    [lobbieActions.getAll.fulfilled]: (state, action) => {
      state.lobbies = action.payload.data.response;
      state.status = "success";
      
    },
    [lobbieActions.getAll.rejected]: (state) => {
      state.status = "failed";
    },
    [lobbieActions.createLobbie.pending]: (state) => {
      state.status = "loading";
    },
    [lobbieActions.createLobbie.fulfilled]: (state,action) => {
      state.status = "success";
      
    },
    [lobbieActions.createLobbie.rejected]: (state) => {
      state.status = "failed";
    },
    [lobbieActions.delete.pending]: (state) => {
      state.status = "loading";
    },
    [lobbieActions.delete.fulfilled]: (state) => {

      state.status = "success";

    },
    [lobbieActions.delete.rejected]: (state) => {
      state.status = "failed";

    },
    [lobbieActions.joinTeam.pending]: (state) => {
      state.status = "loading";
    },
    [lobbieActions.joinTeam.fulfilled]: (state) => {
      state.status = "success";
    },
    [lobbieActions.joinTeam.rejected]: (state) => {
      state.status = "failed";
    },
    // [lobbieActions.putteam.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [lobbieActions.putteam.fulfilled]: (state) => {
    //   state.status = "success";
    // },
    // [lobbieActions.putteam.rejected]: (state) => {
    //   state.status = "failed";
    // },

 
    [lobbieActions.getOne.pending]: (state) => {
      state.status = "loading";
    },
    [lobbieActions.getOne.fulfilled]: (state, action) => {
      state.status = "success";
      state.lobbies = action.payload.data.response;
    },
    [lobbieActions.getOne.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { } = lobbieSlice.actions;
export default lobbieSlice.reducer;
