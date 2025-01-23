import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axios';
import { API_ENDPOINTS } from '@/api/endpoints';
import { ApiResponse } from '@/types/api.types';

interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
  // user: User;
}

const loginGoogle = async (): Promise<LoginResponseDto> => {
  const { data } = await axiosInstance.post<ApiResponse<LoginResponseDto>>(
    API_ENDPOINTS.AUTH.LOGIN_GOOGLE,
  );
  return data.data;
};

export const useLogin = () => {
  // const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginGoogle,
    onSuccess: (data: LoginResponseDto) => {
      // localStorage에는 토큰만 저장
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // 사용자 정보는 쿼리 캐시에 저장
      // queryClient.setQueryData(['user'], data.user);
    },
    onError: (error) => {
      // 에러 처리
      console.error('Login failed:', error);
    },
  });
};
