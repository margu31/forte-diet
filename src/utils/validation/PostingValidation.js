export const reviewValidation = (review) => {
  // 모든 글자 1글자 이상 500글자 이하
  const reviewRegExp = /^.{1,500}$/im;
  return reviewRegExp.test(review);
};

export const menuValidation = (menu) => {
  // 모든 글자 1글자 이상 8글자 이하
  const menuRegExp = /^.{1,8}$/;
  return menuRegExp.test(menu);
};
