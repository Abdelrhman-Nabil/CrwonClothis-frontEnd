import {user_action} from './user.type'
const INITIAL_VALUE={
  currentUser:null, 
}

export const userReduser=(state=INITIAL_VALUE,action)=>{

  const {type,payload}=action
  switch(type){
    case user_action.set_current_user:
    return{
      ...state,
      currentUser:payload
    }
    default:
    return state
  }
}