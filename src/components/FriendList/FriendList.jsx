import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;