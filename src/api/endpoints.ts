export const API_ENDPOINTS = {
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
  },
  AUTH: {
    LOGIN_GOOGLE: '/auth/login/google',
    REFRESH: '/auth/refresh',
    GET_TOKENS: '/auth/tokens', // 새로 추가된 엔드포인트
  },
} as const;
