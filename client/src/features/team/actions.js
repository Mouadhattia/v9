import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const teamActions = {
    createTeam: createAsyncThunk("team/Create", async (team) => {
        try {
          let response = await axios.post("/team/create", team);
          return response;
        } catch (error) {
          console.log(error);
        }
      }),
      fillTeam: createAsyncThunk("team/fill", async ({id,team}) => {
        try {
          let response = await axios.put(`/team/${id}`, team);
          return response;
        } catch (error) {
          console.log(error);
        }
      }),
      getAll:  createAsyncThunk("team/getAll", async () => {
        try {
          let response = await axios.get("/team/all");
          return response;
        } catch (error) {
          console.log(error);
        }
      }),
      getOne: createAsyncThunk("team/getOne", async ({id}) => {
        try {
          let response = await axios.get(`/team/${id}`);
          return response;
        } catch (error) {
          console.log(error);
        }
      })

}