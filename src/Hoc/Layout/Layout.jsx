// import { useEffect, useRef } from "react";
// import { Outlet, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

//  styles
import styles from "./styles/styles.module.css";

const Layout = () => {
  // const toTopRef = useRef(null);
  // ref={toTopRef}
  // const location = useLocation();

  // useEffect(() => {
  //   toTopRef.current.scrollIntoView({ behavior: "smooth" });
  // }, [location]);

  return (
    <div>
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
