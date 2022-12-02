import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import * as S from './Home.styled';

const Home = () => {
  const { name, token } = useSelector((store: AppStore) => store.user);
  return <>{token ? <S.Home>Welcome, {name}!</S.Home> : <>Login to see what we've got for you!</>}</>;
};

export default Home;
