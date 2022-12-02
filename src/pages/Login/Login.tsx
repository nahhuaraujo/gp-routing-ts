import { NavLink } from '../../components';
import { useForm, useUser } from '../../hooks';
import { PublicRoutes } from '../../routes';
import * as S from './Login.styled';

const Login = () => {
  const { login } = useUser();
  const { formValues, changeHandler } = useForm({ username: '', password: '' });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ username: formValues.username, password: formValues.password });
  };

  return (
    <S.Login>
      <div>
        <h1>Login</h1>
        <S.LoginForm onSubmit={submitHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' onChange={changeHandler} value={formValues.username} autoFocus />

          <label htmlFor='password'>Password</label>
          <input id='password' type='password' onChange={changeHandler} value={formValues.password} />

          <button>Login</button>
        </S.LoginForm>
        <S.FormRegisterLabel>
          <div>
            First time here?{' '}
            <NavLink to={`/${PublicRoutes.REGISER}`} type='text' padding='none'>
              Register now!
            </NavLink>
          </div>
        </S.FormRegisterLabel>
      </div>
    </S.Login>
  );
};

export default Login;
