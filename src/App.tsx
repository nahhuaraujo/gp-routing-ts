import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './guard';
import store from './redux/store';
import { PrivateRoutes, PublicRoutes } from './routes';
import { Loading } from './pages';

const Login = lazy(() => import('./pages/Login/Login'));
const About = lazy(() => import('./pages/About/About'));
const Private = lazy(() => import('./pages/Private/Private'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route path={PublicRoutes.ABOUT} element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Router>
        </Provider>
      </Suspense>
    </div>
  );
};

export default App;
