import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ component, redirectTo = '/login' }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
const isLoggedIn = false;
  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
