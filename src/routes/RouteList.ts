import MainPage from '../views/MainPage';
import ReviewPage from '../views/ReviewPage';

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
];

export default RouteList;
