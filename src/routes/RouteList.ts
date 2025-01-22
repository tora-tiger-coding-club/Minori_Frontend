import MainPage from '../views/MainPage';
import MyRecordPage from '../views/MyRecordPage';
import ReviewPage from '../views/ReviewPage';
import SearchPage from '../views/SearchPage';
import LoginPage from '../views/LoginPage';

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
];

export default RouteList;
