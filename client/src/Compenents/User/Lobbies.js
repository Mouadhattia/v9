import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { lobbieActions } from '../../features/lobbie/actions';
import { userActions } from '../../features/user/actions';




const Lobbies = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.Users.users)
    const [lobbie, setlobbie] = useState({
        name:"",
        users : [
            {
                name:"",
                teamName:""
            }

        ]});
    const a = []
    const x = [...a,lobbie]
    const edited = {...user,lobbies:x}
    const handleConfirme= ()=>{
       dispatch(lobbieActions.createLobbie(lobbie));
       dispatch(userActions.put({edited,id:user._id}))
    }
    return (
        <div>
          <h4>create lobbie</h4> 
          <div>
              <label htmlFor="name">lobbie name</label>
              <input type="text" placeholder="enter lobbie name "  onChange={(el)=>setlobbie({...lobbie,name:el.target.value,users:[{name:user.name,teamName:user.team?.name}]})}/>
              <button onClick={handleConfirme}>Confirm </button>

          </div>
          <div>
              
          </div>
        </div>
    )
}

export default Lobbies
