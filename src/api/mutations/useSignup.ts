import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '@/api/axios';
import { API_ENDPOINTS } from '@/api/endpoints';
import { ApiResponse } from '@/types/api.types';

interface SignupRequestDto {
  userId: number;
  username: string;
  introduce: string;
}

interface SignupResponseDto {
  accessToken: string;
  refreshToken: string;
}

export const useSignup = () => {
  const navigate = useNavigate();

  // OAuth 리다이렉트 처리
  useEffect(() => {
    if (window.location.pathname === '/signup') {
      const handleAuthRedirect = async () => {
        try {
          // URL 파라미터에서 토큰 가져오기
          const urlParams = new URLSearchParams(window.location.search);
          const accessToken = urlParams.get('accessToken');

          if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
          } else {
            throw new Error('토큰이 없습니다.');
          }
        } catch (error) {
          console.error('인증 처리 실패:', error);
        }
      };

      handleAuthRedirect();
    }
  }, [navigate]);

  return useMutation({
    mutationFn: async (signupData: SignupRequestDto) => {
      const response = await axiosInstance.post<ApiResponse<SignupResponseDto>>(
        `${API_ENDPOINTS.AUTH.SIGNUP}`,
        signupData,
      );

      const accessToken = response.headers['authorization'];
      const refreshToken = response.headers['refresh-token'];

      if (!accessToken || !refreshToken) {
        throw new Error('토큰이 응답 헤더에 없습니다.');
      }

      // 토큰 저장
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      return response.data.data;
    },
    onSuccess: () => {
      navigate('/'); // 회원가입 성공 시 메인 페이지로 이동
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
    },
  });
};
