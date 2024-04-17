const UserProfile = ({ name, email, bio }) => {
    return (
      <div>
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
    );
  };

  export default UserProfile;