import MainPage from '../views/MainPage';
import MyRecordPage from '../views/MyRecordPage';
import ReviewPage from '../views/ReviewPage';
import SearchPage from '../views/SearchPage';

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
];

export default RouteList;
