import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { axiosInstance } from '@/api/axios';
import { API_ENDPOINTS } from '@/api/endpoints';
import { ApiResponse } from '@/types/api.types';

interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
  // user: User;
}

export const useLogin = () => {
  const navigate = useNavigate();

  // OAuth 리다이렉트 처리
  useEffect(() => {
    if (window.location.pathname === '/oauth/redirect') {
      const handleAuthRedirect = async () => {
        try {
          // URL 파라미터에서 토큰 가져오기
          const urlParams = new URLSearchParams(window.location.search);
          const accessToken = urlParams.get('accessToken');
          const refreshToken = urlParams.get('refreshToken');

          if (accessToken && refreshToken) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            // refreshToken은 서버에서 httpOnly 쿠키로 설정되어야 함

            navigate('/'); // 인증 완료 후 홈으로 이동
          } else {
            throw new Error('토큰이 없습니다.');
          }
        } catch (error) {
          console.error('인증 처리 실패:', error);
          navigate('/login'); // 실패시 로그인 페이지로 이동
        }
      };

      handleAuthRedirect();
    }
  }, [navigate]);

  // 기존 로그인 뮤테이션
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post<ApiResponse<LoginResponseDto>>(
        `${import.meta.env.VITE_API_URL}${API_ENDPOINTS.AUTH.LOGIN_GOOGLE}`,
      );
      return response.data.data; // 실제 로그인 응답 반환
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
};
