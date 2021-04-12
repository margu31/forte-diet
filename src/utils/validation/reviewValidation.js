// 모든 글자 1글자 이상 500글자 이하
export const reviewRegExp = /^.{1,500}$/;

export const isVaildReviewFormat = (value) => reviewRegExp.test(value);
