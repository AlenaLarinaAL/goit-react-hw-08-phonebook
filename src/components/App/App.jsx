import { Layout, Spinner } from 'components';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { useAuth } from 'hooks';

import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'store/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectT0="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
          </Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      )}
    </>
  );
};
