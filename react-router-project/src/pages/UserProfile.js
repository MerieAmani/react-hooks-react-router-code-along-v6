import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function UserProfile() {
  const { userId } = useParams();
  
  // Fetch user data based on userId (this is a placeholder for actual data fetching logic)
  const user = { id: userId, name: 'John Doe', email: 'john.doe@example.com' }; // Example user data

  return (
    <div>
      <Navbar />
      <h1>User Profile</h1>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;