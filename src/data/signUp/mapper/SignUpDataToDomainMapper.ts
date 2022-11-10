import SignUpDomainModel from '../../../domain/model/SignUpDomainModel';
import SignUpDataModel from '../model/SignUpDataModel';

export const SignUpDataToDomainMapper = (model: SignUpDataModel): SignUpDomainModel => {
  return Object.freeze({
    username: model.username,
  } as const);
};
