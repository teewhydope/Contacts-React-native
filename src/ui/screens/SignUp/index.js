import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import EmailValidator from '../../../common/helpers/validators/emailValidator';
import NameValidator from '../../../common/helpers/validators/nameValidator';
import PasswordValidator from '../../../common/helpers/validators/passwordValidator';
import {OnSignUp} from '../../../presentation/actions/auth/SignupViewModel';
import {GlobalContext} from '../../../presentation/provider';
import SignUpScreen from './component/SignUpScreen';
import SignUpFormValidator from './helpers/SignUpFormValidator';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({
      ...form,
      [name]: value,
    });
    SignUpFormValidator(name, value, setErrors);
  };

  const onSubmit = () => {
    if (!NameValidator(form.userName)) {
      setErrors(prev => {
        return {
          ...prev,
          userName: 'userName is required',
        };
      });
    }
    if (!NameValidator(form.firstName)) {
      setErrors(prev => {
        return {
          ...prev,
          firstName: 'First name is required',
        };
      });
    }
    if (!NameValidator(form.lastName)) {
      setErrors(prev => {
        return {
          ...prev,
          lastName: 'Last name is required',
        };
      });
    }
    if (!EmailValidator(form.email)) {
      setErrors(prev => {
        return {
          ...prev,
          email: 'Email is required',
        };
      });
    }

    if (!PasswordValidator(form.password)) {
      setErrors(prev => {
        return {
          ...prev,
          password: 'Password is required',
        };
      });
    }

    if (Object.values(errors).every(item => !item)) {
      console.log(form);
      OnSignUp(form)(authDispatch);
    }
  };

  return (
    <View>
      <SignUpScreen
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        formErrors={errors}
        apiError={error}
        loading={loading}
      />
    </View>
  );
};

export default SignUp;
