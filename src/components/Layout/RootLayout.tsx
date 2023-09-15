import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useRef } from "react";

function RootLayout() {
  const location = useLocation();
  const locationRef = useRef(location.key);

  useEffect(() => {
    let isMounted = true;
    const sameLocation = locationRef.current === location.key;

    if (!sameLocation) window.scroll(0, 0);

    return () => {
      isMounted = false;
    };
  }, [location]);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default RootLayout;
