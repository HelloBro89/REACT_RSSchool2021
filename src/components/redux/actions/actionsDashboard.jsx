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

