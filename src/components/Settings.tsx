import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {Dispatch} from "redux";
import {ActionsType, ChangeMaxValue, ChangeMinValue, SetSettings} from "../redux/counter-reducer";
import {ButtonComponent} from "./common/ButtonComponent";
import {SuperInput} from "./common/SuperInput";
import commonClasses from "./common/Containers.module.css";
import classes from './Settings.module.css'

export function Settings() {
    const maxValue = useSelector<AppStateType, string>(state => state.counterState.maxValue)
    const minValue = useSelector<AppStateType, string>(state => state.counterState.minValue)
    const settings = useSelector<AppStateType, boolean>(state => state.counterState.setting_active)

    const dispatch = useDispatch<Dispatch<ActionsType>>()

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.value) {
            const trigger: string = e.currentTarget.dataset.value
            if (trigger === 'minValue') {
                dispatch(ChangeMinValue(value))
            } else {
                dispatch(ChangeMaxValue(value))
            }
        }
    }

    const applySettings = () => {
        dispatch(SetSettings())
    }

    //elements display conditions
    const setButtonDisable = Number(minValue) >= Number(maxValue) || minValue === '' || maxValue === '' || !settings
    const inputError = Number(minValue) >= Number(maxValue) || minValue === '' || maxValue === ''

    return (
        <div className={commonClasses.mainContainer}>
            <div className={`${commonClasses.upperContainer} ${classes.inputsContainer}`}>
                <SuperInput title={'min value'} value={minValue} dataValue={'minValue'} callbackFn={changeValue} error={inputError}/>
                <SuperInput title={'max value'} value={maxValue} dataValue={'maxValue'} callbackFn={changeValue} error={inputError}/>
            </div>
            <div className={commonClasses.bottomContainer}>
                <ButtonComponent title={'SET'} disabled={setButtonDisable} callbackFn={applySettings}/>
            </div>
        </div>
    )
}