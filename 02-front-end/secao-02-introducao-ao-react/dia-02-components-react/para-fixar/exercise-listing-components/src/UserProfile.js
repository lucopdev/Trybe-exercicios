import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user">
        <Image source={user.avatar} alternativeText="User avatar" />
        <div>
          <p>ID: {user.id}</p>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    );
  }
}

export default UserProfile;