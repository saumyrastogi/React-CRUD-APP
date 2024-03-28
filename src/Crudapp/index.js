import "./style.css";
import ListView from "../components/Listview";
import Newuser from "../components/Newuser";
import { useState } from "react";
export default function CrudApp() {
  const [userData, setUserData] = useState([
    {
      name: "John",
      userName: "John123",
      id: 1
    },
    {
      name: "John",
      userName: "John123",
      id: 2
    }
  ]);
  const [editObj, setEditObj] = useState({
    name: "",
    userName: "",
    id: null
  });
  const handleDelete = (id) => {
    const userArr = userData.filter((item) => item.id !== id);
    setUserData(userArr);
  };

  const handleAddNewuser = (val) => {
    setUserData([...userData, val]);
    setEditObj({
      name: "",
      userName: "",
      id: null
    });
  };

  const handleEdit = (val) => {
    setEditObj(val);
    handleDelete(val.id);
  };

  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <Newuser addNewUser={handleAddNewuser} editUserObj={editObj} />
      <ListView
        userData={userData}
        deleteUser={handleDelete}
        editUser={handleEdit}
      />
    </div>
  );
}
