import "./style.css";
export default function ListView(props) {
  return (
    <div className="container">
      <h2>View Users</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Action</th>
        </tr>
        {props.userData.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.userName}</td>
              <td>
                <button onClick={() => props.editUser(item)}>Edit</button>
              </td>
              <td>
                <button onClick={() => props.deleteUser(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
