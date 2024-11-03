import { useRouteError } from "react-router-dom";

function NoMatch() {
  const error = useRouteError();

  let [title, dataMessage] = [
    "404: Page Not Found",
    "The page you are trying to access is not found or has moved to another location.",
  ];
  console.log("Error ", error);
  if (error.status === 500) {
    const { message } = error.data;
    title = "A server error occurred!!!";
    dataMessage = message;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>{title}</h2>
      <p>{dataMessage}</p>
      <p>{error.message}</p>
    </div>
  );
}

export default NoMatch;
