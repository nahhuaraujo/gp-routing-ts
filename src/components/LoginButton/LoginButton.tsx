import { useNavigate } from 'react-router-dom';
import { useUserActions } from '../../hooks';
import { Roles } from '../../models';
import { PrivateRoutes } from '../../routes';
import { getMorty } from '../../services';
import * as S from './LoginButton.styled';

const LoginButton = () => {
  const { createUser } = useUserActions();
  const navigate = useNavigate();

  const login = async () => {
    const morty = await getMorty();
    createUser({ ...morty, role: Roles.ADMIN });
    navigate(`/${PrivateRoutes.PRIVATE}`);
  };

  return <S.LoginButton onClick={login}>Login</S.LoginButton>;
};

export default LoginButton;
