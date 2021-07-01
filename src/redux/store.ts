import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./utils/localstorage-utils";

const reducers = combineReducers({
        counterState: counterReducer
})

export const store = createStore(reducers, loadState())

store.subscribe(
    () => {
        saveState(store.getState())
})

export type AppStateType = ReturnType<typeof store.getState>;

//@ts-ignore
window.store = store.getState();