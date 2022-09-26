import { useUserActions } from '../../../hooks';

const Home = () => {
  const { resetUser } = useUserActions();

  const logout = () => {
    resetUser();
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
