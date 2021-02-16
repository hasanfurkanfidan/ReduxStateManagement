import * as actionTypes from "./actionTypes"

export const increaseCounter = () => ({
    type: actionTypes.INCREASE_COUNTER,
    payLoad: 1,
})

export const decreaseCounter = () => ({
    type: actionTypes.DECREASE_COUNTER,
    payLoad: 1
})

export const increaseByTwoCounter = () => ({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payLoad: 2
})