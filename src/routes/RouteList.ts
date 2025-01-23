import MainPage from '../views/MainPage';
import MyRecordPage from '../views/MyRecordPage';
import ReviewPage from '../views/ReviewPage';
import SearchPage from '../views/SearchPage';
import LoginPage from '../views/LoginPage';
import OauthRedirectPage from '@/views/OauthRedirectPage';

const RouteList = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewPage,
  },
  {
    path: '/record',
    name: 'record',
    component: MyRecordPage,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/oauth/redirect',
    name: 'oauth-redirect',
    component: OauthRedirectPage,
  },
];

export default RouteList;
