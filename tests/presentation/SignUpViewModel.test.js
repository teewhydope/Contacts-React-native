import axios from 'axios';
import SignUpRepository from '../../src/data/signUp/repository/SignUpRepository';

describe('Sign up user', () => {
  it('When signUp, returns username & email or error', async () => {
    jest.spyOn(axios, 'post').mockReturnValueOnce({
      username: 'teewhydope',
      email: 'teewhydope@gmail.com',
    });
    try {
      const results = await SignUpRepository.signUp({
        username: 'teewhydope126',
        firstName: 'teewhy',
        lastName: 'dope',
        email: 'teewhydope126@gmail.com',
        password: 'Passwordd',
      });
      expect(results.username).toBe('teewhydope');
      expect(results.email).toBe('teewhydope@gmail.comm');
    } catch (error) {
      if (error.response) {
        expect(error.response.status).toBe(400);
      }
    }
  });
});
