import axiosInstance from '../../../network/NetworkClient';
import SignUpApiModel from '../../model/SignUpApiModel';
import SignUpRequestApiModel from '../../model/SignUpRequestApiModel';

class SignUpService {
  async signUp(request: SignUpRequestApiModel): Promise<SignUpApiModel | any> {
    return await axiosInstance.post<SignUpApiModel>('auth/register', {
      username: request.username,
      first_name: request.firstName,
      last_name: request.lastName,
      email: request.email,
      password: request.password,
    });
  }
}

export default new SignUpService();
