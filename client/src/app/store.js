import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "../features/player/playerSlice";
import userReducer from "../features/user/userSlice";
import teamReducer from "../features/team/teamSlice";
import lobbieReducer from "../features/lobbie/lobbieSlice";



export const store = configureStore({
  reducer: {
    Users: userReducer,
    players: playerSlice,
    teams: teamReducer,
    lobbies: lobbieReducer
    
  },
});
