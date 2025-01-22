export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface User {
  userId: number;
  username: string;
  email: string;
  isPublic: string;
  picture: string;
}
