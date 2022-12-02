import { Provider } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import { Navbar } from './components';
import { AuthGuard } from './guard';
import { About, Home, Login, NotFound, Private, Register } from './pages';
import store from './redux/store';
import { PrivateRoutes, PublicRoutes } from './routes';

const App = () => {
  return (
    <S.App>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.ABOUT} element={<About />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.REGISER} element={<Register />} />
            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </S.App>
  );
};

export default App;
