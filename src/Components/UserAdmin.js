import { useEffect, useState } from "react";

function UserAdmin() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let isCleaned = false;
    async function getUsers() {
      const response = await fetch(`http://localhost:5000/users/`);
      
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      if (!isCleaned) {
        const users = await response.json();
        setUsers(users);
        console.log(users);
      }
    }
    getUsers();
    return () => {
      isCleaned = true;
    };
  }, [users.length]);

  return <div>{users[0]?.username}</div>;
}

export default UserAdmin;
