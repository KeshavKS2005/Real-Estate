import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {   useContext } from "react";  
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const data = useLoaderData(); 
  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");  
    } catch (err) {
      console.log(err);
       
    }
  };

 
  if (!currentUser) {
     
  }

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profileUpdatePage"> 
              <button className="updateButton">Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser?.avatar || "/noavatar.jpg"} alt="User Avatar" />  
            </span>
            <span>
              Username: <b>{currentUser?.username}</b> 
            </span>
            <span>
              E-mail: <b>{currentUser?.email}</b>  
            </span>
            <button onClick={handleLogout} className="logoutButton">Logout</button>  
          </div>
          <div className="title">
            <h1>My Posts</h1>
            <Link to="/add">
              <button className="createPostButton">Create New Post</button>  
            </Link>
          </div>
           
          {data.userPosts && data.userPosts.length > 0 ? (
            <List posts={data.userPosts} />
          ) : (
            <p>No posts created yet.</p>
          )}

          <div className="title">
            <h1>Saved Posts</h1>
          </div>
           
          {data.savedPosts && data.savedPosts.length > 0 ? (
            <List posts={data.savedPosts} />
          ) : (
            <p>No saved posts.</p>
          )}
        </div>
      </div>
       
    </div>
  );
}

export default ProfilePage;