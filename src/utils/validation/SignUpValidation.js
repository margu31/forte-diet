export const isEmail = (email) => {
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegExp.test(email);
};

export const isPassword = (password) => {
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z]).{6,20}$/i;
  return passwordRegExp.test(password);
};

export const isId = (id) => {
  const idRegExp = /^[a-zA-z0-9]{4,12}$/i;
  return idRegExp.test(id);
};

export const isGender = (gender) => {
  const genderRegExp = "";
  return genderRegExp.test(gender);
};

export const isHeight = (height) => {
  const heightRegExp = /^[0-9]{2,3}/g;
  return heightRegExp.test(height);
};

export const isNickname = (nickname) => {
  const nicknameRegExp = /^(?=.*[a-z]).{1,5}$/i;
  return nicknameRegExp.test(nickname);
};

export const isWeight = (weight) => {
  const weightRegExp = /^[0-9]{2,3}/g;
  return weightRegExp.test(weight);
};
