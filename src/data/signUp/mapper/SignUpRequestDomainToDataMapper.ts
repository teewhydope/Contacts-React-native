import SignUpRequestDomainModel from '../../../domain/model/SignUpRequestDomainModel';
import SignUpRequestDataModel from '../model/SignUpRequestDataModel';

export const SignUpRequestDomainToDataMapper = (
  model: SignUpRequestDomainModel,
): SignUpRequestDataModel => {
  return Object.freeze({
    username: model.username,
    firstName: model.firstName,
    lastName: model.lastName,
    email: model.email,
    password: model.password,
  } as const);
};
