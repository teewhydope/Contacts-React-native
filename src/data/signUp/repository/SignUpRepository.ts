import SignUpDomainModel from '../../../domain/model/SignUpDomainModel';
import SignUpRequestDomainModel from '../../../domain/model/SignUpRequestDomainModel';
import SignUpRemoteDataSource from '../dataSource/remote/SignUpRemoteDataSource';
import {SignUpDataToDomainMapper} from '../mapper/SignUpDataToDomainMapper';
import {SignUpRequestDomainToDataMapper} from '../mapper/SignUpRequestDomainToDataMapper';

class SignUpRepository {
  async signUp(request: SignUpRequestDomainModel): Promise<SignUpDomainModel> {
    const response = await SignUpRemoteDataSource.signUp(
      (request = SignUpRequestDomainToDataMapper(request)),
    );
    return SignUpDataToDomainMapper(response);
  }
}

export default new SignUpRepository();
