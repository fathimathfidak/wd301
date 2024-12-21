import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Dashboard = () = {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => 
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser);
    } else {
      navigate("/signin"); // Redirect to signin if no user data is found
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin"); // Redirect to signin after logout
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <a id="logout-link" href="#" onClick={handleLogout}>
            Logout
          </a>
        </>
     : (
       <p>Loading...</p>
      )}
    </div>
  )
};

export default Dashboard;
