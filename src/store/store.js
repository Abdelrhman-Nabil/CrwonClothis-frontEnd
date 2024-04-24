import { compose ,applyMiddleware,createStore } from "redux";
import{persistReducer,persistStore} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import{loggerMidleWare} from './middleWare/middleWare'  our middleWare if you want to choise
import {rootReduser} from './root.reduser'
import thunk from "redux-thunk";
//                 {         ↓         }to tells us whether or not we're in development or production
const Middleware=[ process.env.NODE_ENV  !==  'production'&& logger,thunk].filter(Boolean)
/* logger have 2 state:import
1:development that will but consloes in cosloe
2:production that will not consloes any things
*/
const PersistConfig={
    key:'root',
    storage,
    wightList:['cart']
}
const persistorReducer=persistReducer(PersistConfig,rootReduser)

const composeEnhancers=(process.env.NODE_ENV!=='development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPSE__)||compose;

const composedEnhancers=composeEnhancers(applyMiddleware(...Middleware))
export const store=createStore(persistorReducer,undefined,composedEnhancers)  ;
  
export const persistor=persistStore(store)