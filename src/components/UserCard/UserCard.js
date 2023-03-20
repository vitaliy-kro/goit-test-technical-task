import { useState, useEffect } from 'react';
import { CardContent, CardActions } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import {
  CardBox,
  Header,
  BackgroundImage,
  UserLine,
  UserImage,
  UserName,
  UserInfo,
  FollowButton,
} from './UserCard.styled';
import backgroundImage from '../../images/background_image_messages.png';
import logo from '../../images/Logo.png';

const LOCALSTORAGE_KEY = 'Subscribing';

export const UserCard = ({ id, avatar, tweets, followersNumber, name }) => {
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY + id))?.isFollowing ||
      false
  );
  const [followers, setFollowers] = useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY + id))?.followers ||
      followersNumber
  );
  useEffect(() => {
    localStorage.setItem(
      LOCALSTORAGE_KEY + id,
      JSON.stringify({ isFollowing, followers })
    );
  }, [followers, isFollowing, id]);

  const handleFollowChange = e => {
    setIsFollowing(!isFollowing);
    setFollowers(!isFollowing ? followers + 1 : followers - 1);

    e.target.blur();
  };

  return (
    <CardBox>
      <Header avatar={<img src={logo} alt="Logo" width={76} height={22} />} />
      <BackgroundImage image={backgroundImage} />
      <CardContent
        sx={{
          padding: 0,
        }}
      >
        <UserLine>
          <UserImage image={process.env.PUBLIC_URL + avatar} />
        </UserLine>
        <UserName>{name}</UserName>
        <UserInfo>
          <NumericFormat
            value={tweets}
            displayType={'text'}
            thousandSeparator={true}
          />{' '}
          tweets
        </UserInfo>
        <UserInfo>
          {
            <NumericFormat
              value={followers}
              displayType={'text'}
              thousandSeparator={true}
            />
          }{' '}
          followers
        </UserInfo>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <FollowButton onClick={handleFollowChange} isfollowing={isFollowing}>
          {isFollowing ? 'Following' : 'Follow'}
        </FollowButton>
      </CardActions>
    </CardBox>
  );
};
