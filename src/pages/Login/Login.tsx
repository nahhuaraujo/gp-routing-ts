import { useNavigate } from 'react-router-dom';
import { useUserActions } from '../../hooks';
import { PrivateRoutes } from '../../routes';
import { getMorty } from '../../services';

const Login = () => {
  const { createUser } = useUserActions();
  const navigate = useNavigate();

  const login = async () => {
    const mortyData = await getMorty();
    createUser(mortyData);
    navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};
export default Login;
