import { deleteUser } from "../api";

function UserList({ users, onEdit, onRefresh }) {
  const handleDelete = async (id) => {
    if (window.confirm("Delete this user?")) {
      await deleteUser(id); // DELETE
      onRefresh(); // refresh list
    }
  };

  return (
    <div>
      <h3>Users List</h3>
      {users.length === 0 && <p>No users found.</p>}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
