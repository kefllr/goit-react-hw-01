import React from 'react';
import './FriendListItem.css'

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <div className="friend">
      
        <img src={avatar} alt="Avatar" width="48" />
        <p className='friendName'>{name}</p>
        <p className={isOnline ? 'online' : 'offline'} > {isOnline ? 'Online' : 'Offline'}</p>
      </div>
  );
};

export default FriendListItem;
