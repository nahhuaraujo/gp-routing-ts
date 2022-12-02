import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { firstLetterToUpperCase } from '../../../util/string.utils';
import * as S from './Profile.styled';

const Profile = () => {
  const user = useSelector((store: AppStore) => store.user);
  return (
    <S.Profile>
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
            <td>{user?.image ? <img src={user.image} alt={user.username} /> : 'N/A'}</td>
            <td>{user?.location}</td>
            <td>{user?.species}</td>
            <td>{user?.gender}</td>
            <td>{firstLetterToUpperCase(user.role)}</td>
          </tr>
        </tbody>
      </table>
    </S.Profile>
  );
};

export default Profile;
