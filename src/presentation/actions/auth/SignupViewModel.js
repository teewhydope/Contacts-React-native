import SignUpRepository from '../../../data/signUp/repository/SignUpRepository';
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../../../../src/common/constants/actionTypes';

export const OnSignUp =
  ({email, password, userName, firstName, lastName}) =>
  dispatch => {
    dispatch({
      type: REGISTER_LOADING,
    });
    SignUpRepository.signUp({
      username: userName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })
      .then(response => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });
        console.log(response);
      })
      .catch(error => {
        dispatch({
          type: REGISTER_FAIL,
          payload: error.response ? error.response.data : {error: 'Something went wrong, try agin'},
        });
        console.log('error1');
        console.log(error.response.data);
      });
  };
