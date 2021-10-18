import { createSlice } from '@reduxjs/toolkit'
import { teamActions } from './actions';

const initialState = {
teams:[],
status:null,
}

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {},
    extraReducers: {
        [teamActions.createTeam.pending]: (state) => {
            state.status = "loading";
          },
          [teamActions.createTeam.fulfilled]: (state,action) => {
            state.status = "success";
            localStorage.setItem("teamId", action.payload.data.newTeam._id);
          },
          [teamActions.createTeam.rejected]: (state) => {
            state.status = "failed";
          },
          [teamActions.fillTeam.pending]: (state) => {
            state.status = "loading";
          },
          [teamActions.fillTeam.fulfilled]: (state) => {
            state.status = "success";
          },
          [teamActions.fillTeam.rejected]: (state) => {
            state.status = "failed";
          },
          [teamActions.getAll.pending]: (state) => {
            state.status = "loading";
          },
          [teamActions.getAll.fulfilled]: (state,action) => {
            state.status = "success";
            state.teams= action.payload.data;
          },
          [teamActions.getAll.rejected]: (state) => {
            state.status = "failed";
          },
          [teamActions.getOne.pending]: (state) => {
            state.status = "loading";
          },
          [teamActions.getOne.fulfilled]: (state,action) => {
            state.status = "success";
            state.teams= action.payload.data;
          },
          [teamActions.getOne.rejected]: (state) => {
            state.status = "failed";
          },
    }
});

export const {} = teamSlice.actions
export default teamSlice.reducer