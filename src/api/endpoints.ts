export const API_ENDPOINTS = {
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
  },
  AUTH: {
    LOGIN_GOOGLE: '/auth/login/google',
    REFRESH: '/auth/refresh',
    SIGNUP: '/user/signup',
  },
} as const;
