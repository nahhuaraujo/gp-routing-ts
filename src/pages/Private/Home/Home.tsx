import { useSelector } from 'react-redux';
import { FruitsTable } from '../../../components';
import { AppStore } from '../../../redux/store';
import * as S from './Home.styled';

const Home = () => {
  const { name } = useSelector((store: AppStore) => store.user);
  return (
    <S.Home>
      <section>{name && <h3>Welcome {name}!</h3>}</section>
      <FruitsTable />
    </S.Home>
  );
};

export default Home;
