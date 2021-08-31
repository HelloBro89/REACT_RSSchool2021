import axi from '../../services/api.jsx';

export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";
export const CHANGE_SORTING = "CHANGE_SORTING";
export const SET_PAGE = "SET_PAGE";
export const NO_CHANGE = "NO_CHANGE";

export function noChange(value) {
    return {
        type: NO_CHANGE,
        payload: value
    }
}

export function setPage(value) {
    return {
        type: SET_PAGE,
        payload: value
    }
}

export function changeSorting(value) {
    return {
        type: CHANGE_SORTING,
        payload: value
    }
}

export function addSearchValue(value) {
    return {
        type: CHANGE_SEARCH_VALUE,
        payload: value
    }
}

export const SEND_REQ = "SEND_REQ";
export const RECEIVE_REQ = "RECEIVE_REQ";
export const FAIL_REQ = "FAIL_REQ";

export function sendReq() {
    return { type: SEND_REQ }
}

export function receiveReq(res) {
    return {
        type: RECEIVE_REQ,
        payload: res
    }
}

export function failReq() {
    return { type: FAIL_REQ }
}

const URL = `https://newsapi.org/v2/everything?q=dog&apiKey=df3b0e4161374d6d9c5de1b83b9d7838`;

export function getDataNews() {
    return dispatch => {

        dispatch(sendReq())

        return axi
            .get(URL)
            .then(
                res => dispatch(receiveReq(res)),
                error => dispatch(failReq(error))
            )
    }
}
