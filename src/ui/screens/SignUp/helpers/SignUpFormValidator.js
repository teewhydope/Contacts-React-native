import EmailValidator from '../../../../common/helpers/validators/emailValidator';
import NameValidator from '../../../../common/helpers/validators/nameValidator';
import PasswordValidator from '../../../../common/helpers/validators/passwordValidator';

const SignUpFormValidator = (formType, value, setErrors) => {
  const ShowError = (key, errorMessage) => {
    return setErrors(prev => {
      return {
        ...prev,
        [key]: errorMessage,
      };
    });
  };

  const showDefaultError = () => {
    ShowError(formType, 'This field is required');
  };

  switch (formType) {
    case 'userName':
    case 'firstName':
    case 'lastName':
      if (NameValidator(value)) {
        ShowError([formType], null);
      } else {
        showDefaultError(formType);
      }
      break;
    case 'password':
      if (PasswordValidator(value)) {
        ShowError(formType, null);
      } else {
        showDefaultError(formType);
      }
      break;
    case 'email':
      if (EmailValidator(value)) {
        ShowError(formType, null);
      } else {
        showDefaultError(formType);
      }
      break;
    default:
      false;
    // showError([name], '');
  }
};

export default SignUpFormValidator;
