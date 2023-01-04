import React, { useState, useContext,useEffect } from "react";
import { Stack, TextField, Button } from "@mui/material";
import { UserContext } from "../Context/UserContext";

const LoginScreen = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    let isCleaned = false;
    async function getUser() {
      const response = await fetch(`http://localhost:5000/users/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      if (!isCleaned) {
        const user = await response.json();
        setUser(user);
      }
    }
    getUser();
    return () => {
      isCleaned = true;
    };
  }, []);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`${setUser.username} i ${setUser.password}`);
  };
  const logedIn = useContext(UserContext);

  return (
    <div>
      <Stack>
        <TextField
          label="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <TextField
          label="password"
          name="password"
          value={user.password}
          type="password"
          onChange={handleChange}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Stack>
    </div>
  );
};

export default LoginScreen;
