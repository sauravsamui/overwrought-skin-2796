import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./login/login.reducer";
import { signupReducer } from "./signup/signup.reducer";
const rootReducer = combineReducers({
    login:loginReducer,
    signup:signupReducer,
    
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));
