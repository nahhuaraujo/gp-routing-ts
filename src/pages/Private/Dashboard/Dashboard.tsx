import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import * as S from './Dashboard.styled';

const Dashboard = () => {
  const user = useSelector((store: AppStore) => store.user);
  console.log(user);
  return (
    <S.Dashboard>
      <h1>Welcome to your dashboard, {user.name}.</h1>
      <h3>Here is some of your data</h3>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Location</th>
            <th>Species</th>
            <th>Gender</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user?.image && <img src={user.image} width={'50%'} alt={user.username} />}</td>
            <td>{user?.location?.name}</td>
            <td>{user?.species}</td>
            <td>{user?.gender}</td>
            <td>{user.role.toLowerCase()}</td>
          </tr>
        </tbody>
      </table>
    </S.Dashboard>
  );
};

export default Dashboard;
