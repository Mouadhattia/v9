import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const lobbieActions = {
    createLobbie: createAsyncThunk("lobbie/Create", async (lobbie) => {
        try {
          let response = await axios.post("/lobbie", lobbie);
          return response;
        } catch (error) {
          console.log(error);
        }
      }),
      joinTeam: createAsyncThunk("lobbie/join", async ({id,user}) => {
        try {
          let response = await axios.put(`/lobbie/${id}`, user);
          return response;
        } catch (error) {
          console.log(error);
        }
      }),
      getAll:  createAsyncThunk("lobbie/getAll", async () => {
        try {
          let response = await axios.get("/lobbie");
          return response;
        } catch (error) {
          console.log(error);
        }
      }),
      getOne: createAsyncThunk("lobbie/getOne", async ({id}) => {
        try {
          let response = await axios.get(`/lobbie/${id}`);
          return response;
        } catch (error) {
          console.log(error);
        }
      }),
      delete: createAsyncThunk(
        "lobbies/deletelobbies",
        async (id) => {
          try {
            return await axios.delete(`lobbie/${id}`);
          } catch (error) {
            console.log(error);
          }
        }
      ),

}