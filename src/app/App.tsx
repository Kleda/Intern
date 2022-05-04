import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import DashboardPage from '../pages/dashboard'
import ProfilePage from '../pages/profile/profile'
import MyBanksAccounts from '../pages/profile/mybanksaccounts'
import NewBankAccount from '../pages/profile/bankaccountform'
import Cart from '../pages/dashboard/cart';


const App = () => {
  return (
    <BrowserRouter>
      <AppNavigate />
      <Routes>
        <Route path="/" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute isPageLogin><Login /></PrivateRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mybanksaccounts" element={<MyBanksAccounts />} />
        <Route path="/bankaccountform" element={<NewBankAccount/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
