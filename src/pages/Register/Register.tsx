import { useForm, useUser } from '../../hooks';
import * as S from './Register.styled';

const Register = () => {
  const { register } = useUser();
  const { formValues, changeHandler } = useForm({
    name: '',
    username: '',
    email: '',
    gender: '',
    location: '',
    species: '',
    password: '',
    confirmationPassword: '',
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: verificar si las contraseñas coinciden
    // TODO: agregar validacion en changeHandler
    delete formValues.confirmationPassword;
    register(formValues);
  };

  return (
    <S.Register>
      <div>
        <h1>Register</h1>
        <S.RegisterForm onSubmit={submitHandler}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' value={formValues.name} onChange={changeHandler} autoFocus />

          <label htmlFor='username'>Username</label>
          <input type='text' id='username' value={formValues.username} onChange={changeHandler} />

          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={formValues.email} onChange={changeHandler} />

          <label htmlFor='gender'>Gender</label>
          <input type='text' id='gender' value={formValues.gender} onChange={changeHandler} />

          <label htmlFor='location'>Location</label>
          <input type='text' id='location' value={formValues.location.name} onChange={changeHandler} />

          <label htmlFor='species'>Species</label>
          <input type='text' id='species' value={formValues.species} onChange={changeHandler} />

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={formValues.password} onChange={changeHandler} />

          <label htmlFor='confirmationPassword'>Confirm password</label>
          <input
            type='password'
            id='confirmationPassword'
            value={formValues.confirmationPassword}
            onChange={changeHandler}
          />

          <button disabled={formValues.password !== formValues.confirmationPassword}>Register</button>
        </S.RegisterForm>
      </div>
    </S.Register>
  );
};

export default Register;
