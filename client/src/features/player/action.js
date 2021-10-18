import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const playerActions = {
  updatePlayers: createAsyncThunk("players/updateplayer", async (players) => {
    try {
      let response = await axios.put("/player", players);

      return response;
    } catch (error) {
      console.log(error);
    }
  }),

  saveall: createAsyncThunk("player/saveall", async (players) => {
    try {
      let response = await axios.post("/player/all", players);
      return response;
    } catch (error) {
      console.log(error);
    }
  }),
  getAll: createAsyncThunk("player/getall", async () => {
    try {
      let response = await axios.get("/player");
      return response;
    } catch (error) {
      console.log(error);
    }
  }),
  getOne: createAsyncThunk("player/getOne", async (id) => {
    try {
      let response = await axios.get(`/player/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }),
  putOne: createAsyncThunk("player/putOne", async (id,player) => {
    try {
      let response = await axios.put(`/player/${id}`,player);
      return response;
    } catch (error) {
      console.log(error);
    }
  }),
  post: createAsyncThunk("player/post", async (player) => {
    try {
      let response = await axios.post("/player/", player);
      return response;
    } catch (error) {
      console.log(error);
    }
  })
};
