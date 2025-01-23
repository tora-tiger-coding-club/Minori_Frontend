import { useLogin } from '@/api/mutations/useLogin';

const OauthRedirectPage = () => {
  useLogin();
  return <div>로그인 중</div>;
};

export default OauthRedirectPage;
