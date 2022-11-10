const PasswordValidator = password => {
  if (password && password.length > 7) {
    return true;
  }
};

export default PasswordValidator;
