import { Outlet } from "react-router-dom";

//  styles
import styles from "./styles/styles.module.css";

const Layout = () => {
  return (
    <div>
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
