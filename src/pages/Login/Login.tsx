import { useLogin } from './hooks';
import * as S from './Login.styled';

const Login = () => {
  const { username, password, changeHandler, submitHandler } = useLogin();

  return (
    <S.Login onSubmit={submitHandler}>
      <h1>Login</h1>
      <label htmlFor='username'>Username</label>
      <input id='username' type='text' onChange={changeHandler} value={username} autoFocus />
      <label htmlFor='password'>Password</label>
      <input id='password' type='password' onChange={changeHandler} value={password} />
      <button>Login</button>
    </S.Login>
  );
};

export default Login;
