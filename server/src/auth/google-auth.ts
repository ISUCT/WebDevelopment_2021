
export const googleAuthConfig = {
  callbackURL: 'http://localhost:4000/api/auth/google/google-redirect',
  passReqToCallback: true,
  scope: ['email', 'profile']
};

