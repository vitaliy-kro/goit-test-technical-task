import { Grid } from '@mui/material';
import { UserCard } from './components/UserCard/UserCard';
import users from './fakeDatabase.json';

export const App = () => {
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
};
