import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const toTopRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    toTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <div ref={toTopRef}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
