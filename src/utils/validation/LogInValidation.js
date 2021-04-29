export const isEmail = (email) => {
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegExp.test(email);
};

export const isPassword = (password) => {
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z]).{6,20}$/i;
  return passwordRegExp.test(password);
};
