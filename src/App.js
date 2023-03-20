import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { UserCard } from "./components/UserCard/UserCard";
import fakeDataBase from "./fakeDatabase.json";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await fakeDataBase;
      setUsers((u) => [...u, ...result]);
    };

    return () => {
      fetch();
    };

    // ;
  }, []);

  return (
    <Grid container spacing={3}>
      {users.map(({ id, avatar, tweets, user, followers }) => (
        <Grid item xs={12} sm={6} md={4} key={id}>
          <UserCard
            id={id}
            avatar={avatar}
            tweets={tweets}
            followersNumber={followers}
            name={user}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
