import { useEffect, useState } from "react";
import "./style.css";

export default function Newuser(props) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    userName: "",
    id: null
  });
  const { name = '', userName = '', id = '' } = userInfo;
  useEffect(() => {
    if (props.editUserObj.id !== null) {
      setUserInfo({ ...props.editUserObj });
    }
  }, [props]);

  const [genId, setId] = useState(3);
  const handleChange = (e) => {
    const userObj = {
      name: e.target.id === "name" ? e.target.value : name,
      userName: e.target.id === "username" ? e.target.value : userName,
      id: null
    };
    setUserInfo(userObj);
  };
  const handleBtnClick = (val) => {
    if (val.id === null) {
      val.id = genId;
      setId(genId + 1);
    }
    props.addNewUser(val);
    setUserInfo({
      name: "",
      userName: "",
      id: null
    });
  };
  return (
    <div className="Container">
      <h2>Add new user</h2>
      <div className="form">
        <div className="name">
          <input
            value={name}
            onChange={handleChange}
            id="name"
            placeholder="Name..."
          />
          <label>Name</label>
        </div>
        <div className="userName">
          <input
            value={userName}
            onChange={handleChange}
            id="username"
            placeholder="User name..."
          />
          <label>User Name</label>
        </div>
      </div>
      <button
        onClick={() => {
          name && userName && handleBtnClick(userInfo);
        }}
      >
        Add User
      </button>
    </div>
  );
}
