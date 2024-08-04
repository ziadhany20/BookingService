import React, { useEffect, useState } from 'react';
import './UserTable.css';



interface UserTableProps {
  title: string;
}

const UserTable: React.FC<UserTableProps> = ({ title }) => {
  const [users, setUsers] = useState< User[] >([]);

  const [page, setPage] = useState<number>(0);


 

  

  const handleAdd = () => {
     const newUser: User = {
    name: 'New User',
    email: 'new.user@gmail.com',
    title: 'New Title',
    status: 'Awaiting',
    position: 'Junior',
    image: 'https://via.placeholder.com/40',
     };
    
  };

  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const handleDuplicate = (index: number) => {
    const userToDuplicate = users[index];
    // const duplicatedUser = { ...userToDuplicate, name: `${userToDuplicate.name} (Copy)` };
    // setUsers([...users, duplicatedUser]);
  };

  const handleEdit = (index: number) => {
    const editedUsers = [...users]; // Make a copy of the users array
    // editedUsers[index] = { ...editedUsers[index], name: `${editedUsers[index].name} (Edited)` };
    setUsers(editedUsers);
  };

  return (
    <div className="table-container">
      <div className="name">{title}</div>
      <input type="text" placeholder="Search (ctrl + '/' to focus)" className="search-input" />
      <div className="button-group">
        <button className="action-button" onClick={handleAdd}>Add</button>
        <button className="action-button" onClick={() => handleDelete(users.length - 1)}>Delete</button>
        <button className="action-button" onClick={() => handleDuplicate(users.length - 1)}>Duplicate</button>
        <button className="action-button" onClick={() => handleEdit(users.length - 1)}>Edit</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <img src={user.profilePicture} alt={user.fullName} className="user-image" />
                <span>{user.fullName}</span><br />
                <span>{user.email}</span>
              </td>
              <td>{user.email}<br />IT department</td>
              <td><span className={`${user.phoneNumber.toLowerCase()}`}>{user.phoneNumber}</span></td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
