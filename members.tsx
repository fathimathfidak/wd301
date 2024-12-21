import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getUsers, createUser, deleteUser } from './api'; // Your API functions

const MembersPage = () => {
  const [users, setUsers] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const onSubmit = async (data: { name: string; email: string; password: string }) => {
    try {
      const newUser = await createUser(data);
      setUsers([...users, newUser]); // Update the users list
      setIsDialogOpen(false); // Close the dialog
      reset(); // Reset the form
    } catch (error) {
      console.error(error);
      alert('Error creating user');
    }
  };

  // Handle delete user
  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId)); // Remove user from list
    } catch (error) {
      console.error(error);
      alert('Error deleting user');
    }
  };

  return (
    <div>
      <h1>Members</h1>
      <button Click={() => setIsDialogOpen(true)}>Create New User</button>
      <div>
        {users.map(user => (
          <div key={user.id}>
            <p>{user.name} - {user.email}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* New User Form Dialog */}
      {isDialogOpen && (
        <div className="dialog">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Name</label>
              <input {...register('name', { required: 'Name is required' })} />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <label>Email</label>
              <input {...register('email', { required: 'Email is required' })} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <label>Password</label>
              <input type="password" {...register('password', { required: 'Password is required' })} />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setIsDialogOpen(false)}>Cancel</button>
          </form>
      
    </div>
  );
};

export default MembersPage;
