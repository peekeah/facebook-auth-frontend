import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {

      fetch("http://localhost:5000/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("Authentication has been failed");
        })
        .then((data) => setUser(data))
        .catch((error) => {
          navigate('/');
        })
    };
    getUserData();
  }, []);


  const handleLogout = () => {
    window.open('http://localhost:5000/logout', '_self');
  }

  return <>{user && 
    <div className="col-4 mx-auto bg-secondary px-5 py-4" style={{ marginTop: '12%', borderRadius: '12px' }}>
    <h1 className="text-center  mb-4">Profile</h1>
      <div className="my-2">Id: {user.id}</div>
      <div className="my-2">Name: {user.name}</div>
      <div className="my-2">Email: {user.email}</div>
      <div className="my-3">
        <img src={user.picture} alt="profile_pic" />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-danger" onClick={() => handleLogout()} >Logout</button>
      </div>
    </div>
  }</>;
}

export default Profile;
