import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { HederBar } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <HederBar>
        <AppBar />
      </HederBar>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
