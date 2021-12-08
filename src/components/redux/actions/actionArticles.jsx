import axi from '../../services/api.jsx';

export const SEND_REQ = 'SEND_REQ';
export const RECEIVE_REQ = 'RECEIVE_REQ';
export const FAIL_REQ = 'FAIL_REQ';
export const CLEAR_DATA = 'CLEAR_DATA';

export function sendReq() {
  return { type: SEND_REQ };
}

export function clearData(array) {
  return {
    type: CLEAR_DATA,
    payload: array,
  };
}

export function receiveReq(res) {
  return {
    type: RECEIVE_REQ,
    payload: res,
  };
}

export function failReq(error) {
  return {
    type: FAIL_REQ,
    payload: error,
  };
}

export function getDataNews(URL) {
  return (dispatch) => {
    dispatch(sendReq());

    return axi.get(URL).then(
      (res) => dispatch(receiveReq(res)),
      (error) => dispatch(failReq(error))
    );
  };
}
