export const CREATE_USER = 'CREATE_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
import baseUrl from '../../style/baseUrl';

export const createUser = (first_name, last_name, email, phone, password) => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone,
        password,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_USER,
      userdata: resData,
    });
  };
};

export const loginUser = (email, password) => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: SIGNIN_USER,
      userdata: resData,
    });
  };
};

// export const updateUserPersonal = (userID, dateOfBirth, gender) => {
//   return async dispatch => {
//     const response = await fetch(baseUrl.url + 'api/v1/appusers/update', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userID,
//         dateOfBirth,
//         gender,
//       }),
//     });

//     const resData = await response.json();

//     dispatch({
//       type: UPDATE_CONTACT,
//       userdata: resData,
//     });
//   };
// };

// export const getUserById = UserId => {
//   return async dispatch => {
//     const response = await fetch(baseUrl.url + 'api/v1/appusers/get', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         UserId,
//       }),
//     });

//     const resData = await response.json();

//     dispatch({
//       type: CREATE_USER,
//       userdata: resData,
//     });
//   };
// };
