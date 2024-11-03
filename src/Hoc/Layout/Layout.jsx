import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

//  styles
import styles from "./styles/styles.module.css";

const Layout = () => {
  const toTopRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    toTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <div ref={toTopRef}>
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
