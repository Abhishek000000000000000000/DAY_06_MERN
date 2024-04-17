import { useState } from "react";

const EditProfile = ({ name, email, bio, onSave }) => {
    // Local state to manage form inputs
    const [editedName, setEditedName] = useState(name);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedBio, setEditedBio] = useState(bio);
  
    // Handler for form input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === 'name') {
        setEditedName(value);
      } else if (name === 'email') {
        setEditedEmail(value);
      } else if (name === 'bio') {
        setEditedBio(value);
      }
    };
  
    // Handler for form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave({ name: editedName, email: editedEmail, bio: editedBio });
    };
  
    return (
      <div>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={editedName} onChange={handleInputChange} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={editedEmail} onChange={handleInputChange} />
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" name="bio" value={editedBio} onChange={handleInputChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };

  export default EditProfile;