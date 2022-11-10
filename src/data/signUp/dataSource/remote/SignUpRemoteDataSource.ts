import {SignUpApiToDataMapper} from '../../mapper/SignUpApiToDataMapper';
import {SignUpRequestDataToApiMapper} from '../../mapper/SignUpRequestDataToApiMapper';
import SignUpDataModel from '../../model/SignUpDataModel';
import SignUpRequestDataModel from '../../model/SignUpRequestDataModel';
import SignUpService from './SignUpService';

class SignUpRemoteDataSource {
  async signUp(request: SignUpRequestDataModel): Promise<SignUpDataModel | any> {
    const response = await SignUpService.signUp((request = SignUpRequestDataToApiMapper(request)));
    return SignUpApiToDataMapper(response);
  }
}

export default new SignUpRemoteDataSource();
