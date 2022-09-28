import { useUserActions } from '../../hooks';
import * as S from './LogoutButton.styled';

const Logout = () => {
  const { resetUser } = useUserActions();

  const logout = () => {
    resetUser();
  };

  return <S.Logout onClick={logout}>Logout</S.Logout>;
};

export default Logout;
