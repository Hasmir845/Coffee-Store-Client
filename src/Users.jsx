import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from './Navbar';

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);

    const handleUserDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
            fetch(`http://localhost:5000/users/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                      });
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                }
            })
            
            }
          });
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl">Users: {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
        <th>Last Login At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user =><tr key={user._id}>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Blue</td>
            <td>{user.lastSignInTime}</td>
            <td>
                <button className=' mr-2 btn'>Edit</button>
                <button className=' btn'
                onClick={()=> handleUserDelete(user._id)}
                >X</button>
                
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;