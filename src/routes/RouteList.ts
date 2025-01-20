import MainPage from '../views/MainPage';
import Review from '../views/Review';

const RouteList = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/review',
    name: 'review',
    component: Review,
  },
];

export default RouteList;
