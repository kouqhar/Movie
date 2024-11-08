import { useRouteError, useNavigate } from "react-router-dom";

// Styles
import styles from "./styles/styles.module.css";

function NoMatch() {
  const error = useRouteError();
  const navigate = useNavigate();

  let [title, dataMessage] = [
    "404: Page Not Found",
    "The page you are trying to access is not found or has moved to another location.",
  ];
  console.log("Error ", error);
  if (error !== null && error.status === 500) {
    const message = error.data.message || "No http response!!!";
    title = "A server error occurred!!!";
    dataMessage = message;
  }

  const goToHome = () => navigate("/");

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <h2>{title}</h2>
        <p>{dataMessage}</p>
        <p>{error?.message}</p>
        <button onClick={goToHome}>Go To Home Page</button>
      </div>
    </div>
  );
}

export default NoMatch;
