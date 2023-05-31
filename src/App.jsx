import './App.css'
import axios from "axios";
import { useState, useEffect } from "react";
// import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [UserList, setUserList] = useState({});

  const getData = () => {
    axios
      .get("'https://users-crud.academlo.tech/users/'")
      .then( (resp) => 
        setUserList(resp.data),
        console.log(setUserList))
      .catch( (error) => console.error(error));
  };


  return (
      <div>
        <header>
        <h2>Users CRUD</h2>
        </header>
        <div>
            <UsersList
            userList = { UserList }
            /> 
        </div>

      </div>
  )
}

export default App
