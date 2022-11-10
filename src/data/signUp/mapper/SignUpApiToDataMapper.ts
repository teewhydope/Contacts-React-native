import SignUpApiModel from '../model/SignUpApiModel';
import SignUpDataModel from '../model/SignUpDataModel';

export const SignUpApiToDataMapper = (model: SignUpApiModel): SignUpDataModel => {
  return Object.freeze({
    username: model.username,
    firstName: model.firstName,
    lastName: model.lastName,
    email: model.email,
  } as const);
};
