import {ReduserAction} from '../../utils/reduser/reduser'
import { user_action } from './user.type';
export const setCurrentUser=(user)=>
ReduserAction(user_action.set_current_user,user);
