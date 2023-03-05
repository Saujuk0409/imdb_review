export const SIGN_UP = 'SIGN_UP';

export const signUp = (user) => ({
  type: SIGN_UP,
  payload: user,
});