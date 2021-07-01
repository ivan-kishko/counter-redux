import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {Dispatch} from "redux";
import {ActionsType, ChangeCounterValue, InitStateType, ResetCounterValue} from "../redux/counter-reducer";
import {ButtonComponent} from "./common/ButtonComponent";
import classes from './Counter.module.css'
import commonClasses from "./common/Containers.module.css";

export function Counter() {
    const state = useSelector<AppStateType, InitStateType>(state => state.counterState)

    const dispatch = useDispatch<Dispatch<ActionsType>>()

    const incCounter = () => {
        dispatch(ChangeCounterValue())
    }

    const resetCounter = () => {
        dispatch(ResetCounterValue())
    }

    //elements display conditions
    const errorText = Number(state.minValue) >= Number(state.maxValue) ? 'min value bigger then max value' : 'enter values and press set'

    const spanDisplay = !state.setting_active
        ? <span className={state.counter >= Number(state.maxValue) ? classes.errorRed : ''}>{state.counter}</span>
        : <span className={Number(state.minValue) >= Number(state.maxValue) ? classes.errorRed : ''}>{errorText}</span>

    const incButtonDisable = state.counter === Number(state.maxValue) || state.setting_active

    const resetButtonDisable = state.setting_active

    const displayClassName = state.setting_active ? `${commonClasses.upperContainer} ${classes.error}` : `${commonClasses.upperContainer} ${classes.displayContainer}`

    return (
        <div className={commonClasses.mainContainer}>
            <div className={displayClassName}>
                {spanDisplay}
            </div>
            <div className={commonClasses.bottomContainer}>
                <ButtonComponent title={'INC'} disabled={incButtonDisable} callbackFn={incCounter}/>
                <ButtonComponent title={'RESET'} disabled={resetButtonDisable} callbackFn={resetCounter}/>
            </div>
        </div>
    )
}