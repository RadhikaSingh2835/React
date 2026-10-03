import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

function App() {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [update, setUpdate] = useState(null);

  const deleteUser = (id) => {
    const updateUsers = users.filter((user) => user.id != id);
    setUsers(updateUsers);
    localStorage.setItem("users", JSON.stringify(updateUsers));
  };

  return (
    <div className="p-3 bg-gray-600 min-h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((elem) => {
            return (
              <UserCard
                key={elem.id}
                users={elem}
                onDelete={deleteUser}
                setToggle={setToggle}
                setUpdate={setUpdate}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          <Form
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            update={update}
          />
        </div>
      )}
    </div>
  );
}

export default App;
