import SignUpRequestApiModel from '../model/SignUpRequestApiModel';
import SignUpRequestDataModel from '../model/SignUpRequestDataModel';

export const SignUpRequestDataToApiMapper = (
  model: SignUpRequestDataModel,
): SignUpRequestApiModel => {
  return Object.freeze({
    username: model.username,
    firstName: model.firstName,
    lastName: model.lastName,
    email: model.email,
    password: model.password,
  } as const);
};
