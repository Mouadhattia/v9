import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { teamActions } from "../features/team/actions";







export default function Profil() {
  const user = useSelector((state) => state.Users.users);
  const id = useSelector(state => state.teams.teamId)
  console.log(id)
  const dispatch = useDispatch()
  const [team, setteam] = useState({name:""})
const handleconfirm =()=>{
  dispatch(teamActions.createTeam(team))
}


  return (
    <div>
      <h1> jawak behi profilak</h1>
      <h3> create your team</h3>
      <label htmlFor=""> team name</label>
      <input type="text" placeholder="team name" onChange={(e)=>setteam({name:e.target.value})} />
      <button onClick={handleconfirm}>confirm</button>
      
    </div>
  );
}
