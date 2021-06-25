export const SET_CARD_ICONS = 'SET_CARD_ICONS';
export const SET_SAVED_CREDENTIALS = 'SET_SAVED_CREDENTIALS';
export const CREATE_CREDENTIALS = 'CREATE_CREDENTIALS';
import baseUrl from '../../style/baseUrl';

export const getCreditIcons = () => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/credentialsTypes');

    const resData = await response.json();

    dispatch({type: SET_CARD_ICONS, cardIcons: resData});
  };
};

export const getSavedCredentials = user_id => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/credentials/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id,
      }),
    });

    const resData = await response.json();

    dispatch({type: SET_SAVED_CREDENTIALS, savedCredentials: resData});
  };
};

export const sendSocialCredentials = (
  title,
  email,
  password,
  user_id,
  credential_type_id,
) => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        email,
        password,
        user_id,
        credential_type_id,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_CREDENTIALS,
      homeData: resData,
    });
  };
};

export const sendCreditCardCredentials = (
  title,
  client_name,
  address,
  postal,
  mobile,
  card_holder_name,
  card_name,
  expiry,
  cvv,
  user_id,
  credential_type_id,
) => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        client_name,
        address,
        postal,
        mobile,
        card_holder_name,
        card_name,
        expiry,
        cvv,
        user_id,
        credential_type_id,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_CREDENTIALS,
      homeData: resData,
    });
  };
};
