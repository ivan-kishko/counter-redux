import React from 'react';
import classes from "./ButtonComponent.module.css";

type ButtonComponentPropsType = {
    title: string
    disabled: boolean
    callbackFn: () => void
}

export function ButtonComponent(props: ButtonComponentPropsType) {

    return(
        <>
            <button
                className={props.disabled ? `${classes.button} ${classes.buttonDisabled}` : classes.button}
                onClick={props.callbackFn}
                disabled={props.disabled}
            >
                {props.title}
            </button>
        </>
    )
}