import { useNavigate } from 'react-router-dom';
import { useUserActions } from '../../hooks';
import * as S from './LogoutButton.styled';

const Logout = () => {
  const { resetUser } = useUserActions();
  const navigate = useNavigate();

  const logout = () => {
    resetUser();
    navigate('/');
  };

  return <S.Logout onClick={logout}>Logout</S.Logout>;
};

export default Logout;
