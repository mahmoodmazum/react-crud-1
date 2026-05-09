import { useState, useEffect } from "react";
import { getUsers } from "./api";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null); // null = add mode

  // Fetch all users from API
  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  // Run on page load
  useEffect(() => {
    fetchUsers();
  }, []);

  // After add/edit is done, reset form and refresh list
  const handleDone = () => {
    setEditUser(null);
    fetchUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React CRUD with Axios</h1>

      {/* Form: add or edit */}
      <UserForm editUser={editUser} onDone={handleDone} />

      {/* Table: show all users */}
      <UserList
        users={users}
        onEdit={(user) => setEditUser(user)}
        onRefresh={fetchUsers}
      />
    </div>
  );
}

export default App;
