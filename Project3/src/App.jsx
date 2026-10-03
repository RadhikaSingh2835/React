// import React, { useState } from "react";

// import Login from "./components/Login";
// import Register from "./components/Register";
// import UserCard from "./components/UserCard";
// import Createuser from "./components/Createuser";


// const App = () => {
//   const [toggle, setToggle] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [createUser, setCreateUser] = useState(false);

//   return (
//     <>
//       <Createuser setCreateUser={setCreateUser} />
//         {createUser ? <div className=" bg-gray-100 h-screen flex justify-center items-center fixed inset-0">
//                   <Register setToggle={setToggle} setUsers={setUsers} setCreateUser={setCreateUser} />
//       </div> : null }
      
//       <div className="flex gap-4">
//         {users.map((user) => (<UserCard key={user.email} users={user} />))}
//        </div>
//     </>
//   );
// };

// export default App;
import React, { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";
import Createuser from "./components/Createuser";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  const [createUser, setCreateUser] = useState(false);

  return (
    <div className="relative min-h-screen p-4">
                                                      {/* Header / Create User Button */}
      <Createuser setCreateUser={setCreateUser} />

                                                       {/* User Cards Section - Stays sticky/unmoved at top */}
      <div className="flex flex-wrap gap-4 mt-4">
        {users.map((user) => (
          <UserCard key={user.email} users={user} />
        ))}
      </div>

      {/* Blurred Modal Overlay */}
      {createUser && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setCreateUser(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Register 
              setToggle={setToggle} 
              setUsers={setUsers} 
              setCreateUser={setCreateUser} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;