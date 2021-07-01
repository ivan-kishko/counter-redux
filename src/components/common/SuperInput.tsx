import React from 'react';
import classes from './SuperInput.module.css'

type SuperInputPropsType = {
    title: string
    value: string
    dataValue: "minValue" | "maxValue"
    callbackFn: (e: React.ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export function SuperInput(props: SuperInputPropsType) {
    return(
        <div className={classes.inputContainer}>
            <span>{props.title}</span>
            <input
                className={props.error ? `${classes.localInput} ${classes.localInputError}` : classes.localInput}
                value={props.value}
                data-value={props.dataValue}
                onChange={props.callbackFn}
            />
        </div>
    )
}