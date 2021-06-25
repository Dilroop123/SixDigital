export const SET_HOME = 'SET_HOME';
export const CREATE_SERVICE_REQUEST = 'CREATE_SERVICE_REQUEST';

import baseUrl from '../../style/baseUrl';

export const fetchHomeData = user_id => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: SET_HOME,
      homeData: resData,
    });
  };
};

export const createServiceRequest = (service_id, user_id) => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id,
        user_id,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_SERVICE_REQUEST,
      userdata: resData,
    });
  };
};
