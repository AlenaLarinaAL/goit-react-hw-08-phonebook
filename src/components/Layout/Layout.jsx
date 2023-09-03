import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { HederBar } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <HederBar>
        <AppBar />
      </HederBar>
      <main>
        <Outlet />
      </main>
    </>
  );
};
