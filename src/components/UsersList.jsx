import React from 'react'

const UsersList = ({ UserList }) => {
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {
                    UserList.map( user =>
                        <li key={user.id} >
                            <img src= { user.image_url} alt="User Image" />
                            <h4> {user.first_name} </h4>
                            <h4> {user.last_name} </h4>
                            <h4> {user.birthday} </h4>
                            <h4> {user.email} </h4>
                            <button
                            >Eliminar Usuario</button>
                            <button>Editar</button>
                        </li>
                        )
                }
            </ul>
        </div>
    )
};

export default UsersList;