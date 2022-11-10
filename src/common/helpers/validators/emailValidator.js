import {EMAIL_REGEX} from '../../constants/regex';

const EmailValidator = email => {
  if (EMAIL_REGEX.test(email)) {
    return true;
  }
};

export default EmailValidator;
