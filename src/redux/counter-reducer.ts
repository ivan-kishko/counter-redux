//action types and action creators
export enum ACTIONS_TYPE {
    CHANGE_MIN_VALUE = 'Counter/CHANGE_CHANGE_MIN_VALUE',
    CHANGE_MAX_VALUE = 'Counter/CHANGE_CHANGE_MAX_VALUE',
    CHANGE_COUNTER_VALUE = 'Counter/CHANGE_CHANGE_COUNTER_VALUE',
    RESET_COUNTER_VALUE = 'Counter/RESET_COUNTER_VALUE',
    SET_SETTINGS = 'Counter/SET_SETTINGS',
}

const initState = {
    minValue: '0',
    maxValue: '5',
    counter: 0,
    setting_active: false
}

export type InitStateType = {
    minValue: string;
    maxValue: string;
    counter: number;
    setting_active: boolean;
}

export const counterReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_MIN_VALUE:
            return {
                ...state,
                minValue: action.minValue,
                setting_active: true
            }
        case ACTIONS_TYPE.CHANGE_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue,
                setting_active: true
            }
        case ACTIONS_TYPE.CHANGE_COUNTER_VALUE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case ACTIONS_TYPE.RESET_COUNTER_VALUE:
            return {
                ...state,
                counter: Number(state.minValue)
            }
        case ACTIONS_TYPE.SET_SETTINGS:
            return {
                ...state,
                counter: Number(state.minValue),
                setting_active: false
            }
        default:
            return state
    }
}

type ChangeMinValueType = {
    type: ACTIONS_TYPE.CHANGE_MIN_VALUE,
    minValue: string
}

export const ChangeMinValue = (minValue: string): ChangeMinValueType => {
    return {
        type: ACTIONS_TYPE.CHANGE_MIN_VALUE,
        minValue
    }
}

type ChangeMaxValueType = {
    type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
    maxValue: string
}

export const ChangeMaxValue = (maxValue: string): ChangeMaxValueType => {
    return {
        type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
        maxValue

    }
}

type ChangeCounterValueType = {
    type: ACTIONS_TYPE.CHANGE_COUNTER_VALUE,
}

export const ChangeCounterValue = (): ChangeCounterValueType => {
    return {
        type: ACTIONS_TYPE.CHANGE_COUNTER_VALUE,
    }
}

type ResetCounterValueType = {
    type: ACTIONS_TYPE.RESET_COUNTER_VALUE
}

export const ResetCounterValue = (): ResetCounterValueType => {
    return {
        type: ACTIONS_TYPE.RESET_COUNTER_VALUE,
    }
}

type SetSettingsType = {
    type: ACTIONS_TYPE.SET_SETTINGS,
}

export const SetSettings = (): SetSettingsType => {
    return {
        type: ACTIONS_TYPE.SET_SETTINGS,
    }
}

export type ActionsType = ChangeMinValueType | ChangeMaxValueType | ChangeCounterValueType | SetSettingsType | ResetCounterValueType