
# Twitter Clone Card

This is a small React project that creates a Twitter clone card. The card displays a user's avatar, name, tweets, followers, and a follow/unfollow button.


## Getting start

### Prerequisites

- Node.js (v14.15.4 or later)
- NPM (v6.14.10 or later)

### Installing

To get started, clone the repository and install the dependencies using NPM:

```bash
git clone https://github.com/vitaliy-kro/goit-test-technical-task
cd goit-test-technical-task
npm install
```

### Running the Project

To run the project locally, use the following command:

```bash
npm start
```  

This will start the development server on `http://localhost:3000`.

### Building the Project

To build the project for production, use the following command:

```bash
npm run build
```

This will create a production-ready build of the project in the `build` directory.

## Usage

To use the Twitter clone card, import the `UserCard` component and pass in the relevant props:

```javascript
import React from 'react';
import {UserCard} from './UserCard;

function App() {
  const user = {
    id: 1,
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
    tweets: 100,
    followers: 500,
  };

  return (
    <UserCard
      id={user.id}
      name={user.name}
      avatar={user.avatar}
      tweets={user.tweets}
      followers={user.followers}
    />
  );
}

export default App;
```

The `UserCard` component will render the user's avatar, name, tweets, followers, and a follow/unfollow button based on the props passed in.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License

This project is licensed under the MIT License - see the [LICENSE.md]((https://choosealicense.com/licenses/mit/)) file for details.

