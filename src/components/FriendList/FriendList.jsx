import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import './FriendList.css'

const FriendList = ({ friends }) => {
  return (
    <ul className='friendsList'>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;