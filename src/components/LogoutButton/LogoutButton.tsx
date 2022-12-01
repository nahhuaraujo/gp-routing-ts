import { useNavigate } from 'react-router-dom';
import { useUserActions } from '../../hooks';
import * as S from './LogoutButton.styled';

const Logout = () => {
  const { resetUserData } = useUserActions();
  const navigate = useNavigate();

  const logout = () => {
    resetUserData();
    navigate('/login');
  };

  return <S.Logout onClick={logout}>Logout</S.Logout>;
};

export default Logout;
