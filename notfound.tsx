import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <button id="backButton" ></button>
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
