import { useState, useEffect } from "react";
import { createUser, updateUser } from "../api";

// This form handles both ADD and EDIT
function UserForm({ editUser, onDone }) {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  // If editUser is passed, fill the form with its data
  useEffect(() => {
    if (editUser) {
      setForm(editUser);
    } else {
      setForm({ name: "", email: "", age: "" });
    }
  }, [editUser]);

  // Update form state when user types
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editUser) {
      await updateUser(editUser.id, form); // UPDATE
    } else {
      await createUser(form); // CREATE
    }
    onDone(); // refresh list
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>{editUser ? "Edit User" : "Add New User"}</h3>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        required
      />
      <button type="submit">{editUser ? "Update" : "Add"}</button>
      {editUser && (
        <button type="button" onClick={onDone}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default UserForm;
