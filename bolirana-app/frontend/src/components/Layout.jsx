import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const showFooter = location.pathname === '/';

  return (
    <>
      <Navbar />
      <main className="content-offset">
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </>
  );
}
