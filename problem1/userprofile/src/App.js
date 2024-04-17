import logo from './logo.svg';
import './App.css';
import EditProfile from './components/EditProfile';
import UserProfile from './components/UserProfile';
import { useState } from 'react';

function App() {
  const initialUserData = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };

  // State to manage mode (view/edit) and user data
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState(initialUserData);

  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Save edited user data
  const saveUserData = (newUserData) => {
    setUserData(newUserData);
    setEditMode(false); // Exit edit mode after saving
  };

  return (
    <div className="App">
            <h1>User Profile Application</h1>
      {editMode ? (
        <EditProfile {...userData} onSave={saveUserData} />
      ) : (
        <UserProfile {...userData} />
      )}
      <button onClick={toggleEditMode}>
        {editMode ? "Cancel" : "Edit Profile"}
      </button>

    </div>
  );
}

export default App;
