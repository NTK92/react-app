import FinancePage from '../components/FinancePage/FinancePage';
import HomePage from '../components/HomePage/HomePage';
import SettingsPage from '../components/SettingsPage/SettingsPage';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/finance',
    component: FinancePage
  } ,
  {
    path: '/settings',
    component: SettingsPage
  }
];

export default routes;