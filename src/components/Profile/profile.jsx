import './Profile.css'

const Profile = (props) => {
    return(
        <div className="profileBox">
  <div className="profileImgBox">
    <img
     className="profileImg"   
      src={props.image}
      alt="User avatar"
    />
    <p className="userName">{props.name}</p>
    <p className="userinfo">{props.tag}</p>
    <p className="userinfo">{props.location}</p>
  </div>

  <ul className="statsList">
    <li className="statsitem">
      <span className="statsText">Followers: </span>
      <span className="statsNum">{props.stats.followers}</span>
    </li>
    <li className="statsitem">
      <span className="statsText">Views: </span>
      <span className="statsNum">{props.stats.views}</span>
    </li>
    <li className="statsitem">
      <span className="statsText">Likes: </span>
      <span className="statsNum">{props.stats.likes}</span>
    </li>
  </ul>
</div>

        );
}
export default Profile;